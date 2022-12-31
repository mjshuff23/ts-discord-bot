import { Client, ClientOptions } from 'discord.js';
import { ready } from './listeners';
import * as dotenv from 'dotenv';
import color from 'colors-cli';

dotenv.config()

// Colors for messages in console
const error = color.red;
const warning = color.yellow;
const notice = color.blue;
const success = color.green_bt;


const client = new Client({
  intents: [],
});
ready(client);

console.log('Bot is ready!');