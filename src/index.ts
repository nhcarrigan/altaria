/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { Client, GatewayIntentBits, Events, MessageFlags } from "discord.js";
import { blocks } from "./config/blocks.js";
import { checkAltText } from "./modules/checkAltText.js";
import { instantiateServer } from "./server/serve.js";
import { logger } from "./utils/logger.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, () => {
  void logger.log(
    "info",
    `Logged in as ${client.user?.username ?? "unknown user"}`,
  );
});

client.on(Events.MessageCreate, (message) => {
  void checkAltText(message);
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }
  void interaction.reply({
    components: blocks,
    flags:      MessageFlags.IsComponentsV2,
  });
});

await client.login(process.env.BOT_TOKEN);
instantiateServer();
