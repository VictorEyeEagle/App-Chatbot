# Chatbot em React Native

Este é um projeto de um chatbot desenvolvido em React Native. O chatbot utiliza a API da OpenAI para gerar respostas automáticas e armazena as mensagens no MongoDB.

## 🛠️ Tecnologias e Ferramentas

- **Linguagem de Programação**: JavaScript
- **Framework**: React Native
- **Banco de Dados**: MongoDB
- **API**: OpenAI

## 📚 Como funciona

O chatbot funciona enviando mensagens do usuário para um servidor express, que por sua vez faz uma requisição para a API da OpenAI. A resposta da API é então enviada de volta para o aplicativo e exibida na interface do usuário.

As mensagens são armazenadas no MongoDB, um banco de dados NoSQL orientado a documentos. Cada mensagem é armazenada como um documento no banco de dados, com campos para o texto da mensagem e o horário em que foi enviada.

## 🚀 Executando o projeto

1. Clone este repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor com `node server.js`
4. Inicie o aplicativo com `expo start`