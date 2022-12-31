import { Client, Events } from 'discord.js';
import { Commands } from '../commands';
import color from 'colors-cli';

export default (client: Client): void => {
  client.once(Events.ClientReady, async (returnedClient) => {
    if (!client.user || !client.application) return;

    await client.application.commands.set(Commands);

    console.log(`${color.red(returnedClient.user.tag)} is online!`);
  })
}