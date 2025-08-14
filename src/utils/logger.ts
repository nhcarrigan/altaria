/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { Logger } from "@nhcarrigan/logger";

export const logger = new Logger(
  "Altaria",
  process.env.LOG_TOKEN ?? "",
);
