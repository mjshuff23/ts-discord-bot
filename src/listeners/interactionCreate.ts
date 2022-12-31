import { CommandInteraction, Client, Interaction } from 'discord.js';
import { Commands } from '../Commands';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction,
): Promise<any> => {
  const slashCommand = Commands.find(
    (command) => command.name === interaction.commandName,
  );

  if (!slashCommand) {
    return interaction.followUp({
      content: `An error ocurred while trying to run the command ${interaction.commandName}.`,
    });
  }

  await interaction.deferReply();
  slashCommand.run(client, interaction);
};
