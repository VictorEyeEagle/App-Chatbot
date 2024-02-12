require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/App-chatbot');

app.use(express.json());

app.post('/message', async (req, res) => {
  const { text } = req.body;

  const gptResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: text,
    max_tokens: 60
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });

  const gptReply = gptResponse.data.choices[0].text.trim();

  const userMessage = new Message({ text, timestamp: new Date() });
  await userMessage.save();

  const botMessage = new Message({ text: gptReply, timestamp: new Date() });
  await botMessage.save();

  res.send(gptReply);
});

app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});

const messageSchema = new mongoose.Schema({
  text: String,
  timestamp: Date
});

const Message = mongoose.model('Message', messageSchema);
