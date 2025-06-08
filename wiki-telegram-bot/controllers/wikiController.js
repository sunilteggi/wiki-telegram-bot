const wikiService = require('../services/wikiService');
const telegramService = require('../services/telegramService');

exports.sendWikiToTelegram = async (req, res) => {
  try {
    const article = await wikiService.getRandomArticle();
    const message = `*${article.title}*\n\n${article.extract}`;
    await telegramService.sendMessage(message);
    res.status(200).send('Wikipedia article sent to Telegram group!');
  } catch (error) {
    console.error('Error in sendWikiToTelegram:', error);
    res.status(500).send('Error sending article.');
  }
};
