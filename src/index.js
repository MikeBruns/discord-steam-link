const fs = require('fs');                   // Loads the Filesystem library
const Discord = require('discord.js');      // Loads the discord API library
const Config = require('../config.json');    // Loads the configuration values
const BotLib = require('../lib/bot.js');

// Loads our dispatcher classes that figure out what handlers to use in response to events
const Keywords = require('./dispatchers/keywordDispatch');
const Commands = require('./dispatchers/commandDispatch');

const client = new Discord.Client(); // Initiates the client
client.botConfig = Config; // Stores the config inside the client object so it's auto injected wherever we use the client
client.botConfig.rootDir = __dirname; // Stores the running directory in the config so we don't have to traverse up directories.

// Loads our handler functions that do all the work
BotLib.loadHandlers(client, 'commands');
BotLib.loadHandlers(client, 'keywords');

const cooldowns = new Discord.Collection(); // Creates an empty list for storing timeouts so people can't spam with commands

// Starts the bot and makes it begin listening to events.
client.on('ready', () => {
    console.log('Bot Online');
});

// Handle user messages
client.on('message', message => {
    // we don't want to part of our own shit dewy
    if(message.author.bot) return;

    const keyword = 'https://steamcommunity.com/';
    // https://steamcommunity.com/sharedfiles/filedetails/?id=2821914954
    if (message.content.toLowerCase().includes(keyword)) {
        // const paragraph = 'https://steamcommunity.com/sharedfiles/filedetails/?id=2821914954';
        const regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gm;
        const found = message.content.match(regex);
        console.log(found);

        if (found) {
            found.forEach(url => {
                if (url.includes(keyword)) {
                    message.channel.send(`steam://openurl/${url}`);
                }
            });
        }
        
    }

    // steam://openurl/https://steamcommunity.com/sharedfiles/filedetails/?id=2821914954
});

// Log the bot in using the token provided in the config file
client.login(client.botConfig.token).catch((err) => {
    console.log(`Failed to authenticate with Discord network: "${err.message}"`);
});