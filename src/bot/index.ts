import { Telegraf } from 'telegraf';

import { StartCommand } from './commands/start';
import { logMiddleware } from './middlwares/log';
import { ForwardMessage } from './handlers/anyMessage';

export function createBot(token: string) {
  const startCommand = new StartCommand();
  const forwardMessageHander = new ForwardMessage();

  const bot = new Telegraf(token);

  bot.use(logMiddleware);

  bot.start(startCommand.execute);
  bot.on('message', forwardMessageHander.execute);

  return bot;
}
