# Discord steam link

Discord bot that turns your steam links in your messages into deep links to steam! Works on both Windows and macOS

## Setup

1. Clone this repository: `git clone https://github.com/MikeBruns/discord-steam-link.git` then navigate to the new
   folder named `discord-steam-link`
2. Install dependencies with `npm i`
3. Create a `.env` file at the root of the project with the template from `.env.example`
4. In the `.env` file replace `<DISCORD_TOKEN>` with your token provided by discord on the applications dashboard.
5. Start the bot with `npm run start`
6. Add the bot to the server of your choice by filling out the details in this 
   [handy application](https://discordapi.com/permissions.html#3072) and clicking the generated link.

## Usage

share a link like `https://steamcommunity.com/sharedfiles/filedetails/?id=2842010892&searchtext=` in discord. You should get a message from the bot with a a link that will open the previous link in the steam app rather than in the browser.

## Running the bot permanently

You can run the bot using the given `pm2` npm scripts to manage starting and restarting the application. 

## Developing
`npm run dev`

