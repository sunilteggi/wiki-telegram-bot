**An Express.js mini web app that fetches a random Wikipedia article summary and posts it to a Telegram group via bot.**

**Setup**
Create .env file with:
BOT_TOKEN=your_telegram_bot_token_here
CHAT_ID=your_telegram_group_chat_id_here
PORT=3000

**Install dependencies:**
npm install express axios dotenv

**Run the server:**
node index.js
Visit in browser:
http://localhost:3000/send-wiki

Check your Telegram group for the message.

**Note**
Make sure your Telegram bot is added to the group and has permissions to post messages.

**Demo video link**
https://drive.google.com/file/d/1tJ61qKWyjgb2_aAvX5w2KZjssq4XIy7I/view?usp=sharing
