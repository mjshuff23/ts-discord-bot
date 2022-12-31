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
  // GatewayIntentBits.Guilds option ensures caches for guilds, channels, and roles are populated and available.
  // Intents define which events Discord should send to your bot, you may wish to enable more than just the minimum.
  // "Guild" refers to a Discord server.
  intents: [GatewayIntentBits.Guilds],
});

ready(client);
interactionCreate(client);

client.login(process.env.TOKEN);
