const axios = require('axios');
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

exports.sendMessage = async (message) => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await axios.post(url, {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'Markdown'
  });
};
