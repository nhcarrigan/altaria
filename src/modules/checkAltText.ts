/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { reminders } from "../config/reminders.js";
import { getRandomValue } from "../utils/getRandomValue.js";
import { logger } from "../utils/logger.js";
import type { Message } from "discord.js";

/**
 * Checks if a message has image attachments, and
 * if those attachments have alt text.
 * @param message - The message payload from Discord.
 */
export const checkAltText = async(message: Message): Promise<void> => {
  if (message.author.bot) {
    return;
  }

  if (message.attachments.size <= 0) {
    return;
  }

  const images = message.attachments.filter((attachment) => {
    return attachment.contentType?.startsWith("image/");
  });
  const noDescription = images.filter((image) => {
    return image.description === null;
  });

  if (noDescription.size > 0) {
    const reminder = getRandomValue(reminders);
    await message.reply({
      content: `${reminder}\n-# If you do not know how to do this, check [Discord's help article](<https://support.discord.com/hc/en-us/articles/211866427-How-do-I-upload-images-and-GIFs>)!\n-# Need help writing descriptive text? Our bot [Cordelia](<https://cordelia.nhcarrigan.com>) can do it for you!`,
    }).catch(() => {
      return null;
    });

    await logger.metric("alt_text_missing", 1, {});
  }
};
