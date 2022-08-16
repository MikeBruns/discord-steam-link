import { Client, ActivityType } from 'discord.js';
import { DISCORD_TOKEN } from './env';

const client = new Client();
client.botConfig = DISCORD_TOKEN;

// Starts the bot and makes it begin listening to events.
client.on('ready', () => {
  console.log('Bot Online');
  client.user.setActivity('Playing with myself pt. 2', {
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=buSO5vSubxw',
  });
});

// Handle user messages
client.on('message', (message) => {
  // we don't want to part of our own shit dewy
  if (message.author.bot) return;

  const keyword = 'https://steamcommunity.com/';
  // https://steamcommunity.com/sharedfiles/filedetails/?id=2821914954
  if (message.content.toLowerCase().includes(keyword)) {
    // const paragraph = 'https://steamcommunity.com/sharedfiles/filedetails/?id=2821914954';
    const regex =
      // eslint-disable-next-line no-useless-escape
      /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gm;
    const found = message.content.match(regex);

    if (found) {
      found.forEach((url) => {
        if (url.includes(keyword)) {
          message.channel.send(`<steam://openurl/${url}>`).catch(console.error);
        }
      });
    }
  }
});

// Log the bot in using the token provided in the config file
client.login(client.botConfig.token).catch((err) => {
  console.log(`Failed to authenticate with Discord network: "${err.message}"`);
});
