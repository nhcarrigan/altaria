/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import {
  TextDisplayBuilder,
  SeparatorBuilder,
  SeparatorSpacingSize,
  ContainerBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} from "discord.js";

export const blocks = [
  new ContainerBuilder().
    addTextDisplayComponents(
      new TextDisplayBuilder().setContent("# About Altaria"),
    ).
    addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        // eslint-disable-next-line stylistic/max-len -- Big boi string.
        "Hi there~! I am Altaria, a bot that reminds your community members to include alt text in their images!",
      ),
    ).
    addSeparatorComponents(
      new SeparatorBuilder().
        setSpacing(SeparatorSpacingSize.Small).
        setDivider(true),
    ).
    addTextDisplayComponents(
      new TextDisplayBuilder().setContent("## What can I do?"),
    ).
    addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        // eslint-disable-next-line stylistic/max-len -- Big boi string.
        "Super-duper simple! All you need to do is add me to your community, and ensure I can both see and send messages in whichever channels you want me to help out in! I will take care of the rest~",
      ),
    ).
    addSeparatorComponents(
      new SeparatorBuilder().
        setSpacing(SeparatorSpacingSize.Small).
        setDivider(true),
    ).
    addTextDisplayComponents(
      new TextDisplayBuilder().setContent("## What if I need help?"),
    ).
    addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        // eslint-disable-next-line stylistic/max-len -- Big boi string.
        "My deepest apologies if I have made a mistake! Please reach out to us in our Discord server or on the forum, and we will do our best to assist you.",
      ),
    ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().
      setStyle(ButtonStyle.Link).
      setLabel("Discord Server").
      setURL("https://chat.nhcarrigan.com"),
    new ButtonBuilder().
      setStyle(ButtonStyle.Link).
      setLabel("Forum").
      setURL("https://forum.nhcarrigan.com"),
  ),
];
