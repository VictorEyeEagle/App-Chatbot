# Chatbot in React Native

This is a project of a chatbot developed in React Native. The chatbot utilizes the OpenAI API to generate automatic responses and stores messages in MongoDB.

## 🛠️ Technologies and Tools

- **Programming Language**: JavaScript
- **Framework**: React Native
- **Database**: MongoDB
- **API**: OpenAI

## 📚 How it Works

The chatbot works by sending user messages to an Express server, which then makes a request to the OpenAI API. The API's response is then sent back to the application and displayed in the user interface.

Messages are stored in MongoDB, a document-oriented NoSQL database. Each message is stored as a document in the database, with fields for the message text and the time it was sent.

## 🚀 Running the Project

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the server with `node server.js`
4. Start the application with `expo start`
