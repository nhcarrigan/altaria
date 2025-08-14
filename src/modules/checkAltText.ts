/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { reminders } from "../config/reminders.js";
import { getRandomValue } from "../utils/getRandomValue.js";
import type { Message } from "discord.js";

/**
 * Checks if a message has image attachments, and
 * if those attachments have alt text.
 * @param message - The message payload from Discord.
 */
export const checkAltText = async(message: Message): Promise<void> => {
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
      content: reminder,
    });
  }
};
