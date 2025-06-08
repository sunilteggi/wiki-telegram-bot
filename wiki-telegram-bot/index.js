require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
const CHAT_ID = process.env.CHAT_ID;

app.get('/send-wiki', async (req, res) => {
  try {
    const response = await axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    const { title, extract, content_urls } = response.data;

    const message = `📝 *${title}*\n\n${extract}\n\n🔗 [Read more](${content_urls.desktop.page})`;

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    });

    res.send('✅ Wikipedia article sent to Telegram!');
  } catch (error) {
    if (error.response) {
  console.error('❌ Telegram API Error:', error.response.data);
} else {
  console.error('❌ Error:', error.message);
}

    res.status(500).send('❌ Error sending Wikipedia article to Telegram');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


