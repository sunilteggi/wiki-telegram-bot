# Wiki Telegram Bot

## Description
An Express.js mini web app that fetches a random Wikipedia article summary and posts it to a Telegram group via bot.

## Setup
1. Create `.env` file with:
   ```
   BOT_TOKEN=your_telegram_bot_token_here
   CHAT_ID=your_telegram_group_chat_id_here
   PORT=3000
   ```
2. Install dependencies:
   ```
   npm install express axios dotenv
   ```
3. Run the server:
   ```
   node index.js
   ```
4. Visit in browser:
   ```
   http://localhost:3000/send-wiki
   ```
5. Check your Telegram group for the message.

---

## Note
Make sure your Telegram bot is added to the group and has permissions to post messages.
