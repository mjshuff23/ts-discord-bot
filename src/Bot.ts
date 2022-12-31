import { Client, GatewayIntentBits } from 'discord.js';
import { interactionCreate, ready } from './listeners';
import * as dotenv from 'dotenv';
import color from 'colors-cli';

dotenv.config()

// Colors for messages in console
const error = color.red;
const warning = color.yellow;
const notice = color.blue;
const success = color.green_bt;

const client = new Client({
  // The GatewayIntentBits.Guilds intents option is necessary for the discord.js client to work as you expect it to, as it ensures that the caches for guilds, channels, and roles are populated and available for internal use.
  // The term "guild" is used by the Discord API and in discord.js to refer to a Discord server.
  // Intents also define which events Discord should send to your bot, and you may wish to enable more than just the minimum.
  intents: [GatewayIntentBits.Guilds],
});

ready(client);
interactionCreate(client);

client.login(process.env.TOKEN);
