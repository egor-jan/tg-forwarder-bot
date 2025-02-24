import { type Context } from 'telegraf';
import { type Update } from 'telegraf/typings/core/types/typegram';

import { type IMessageHandler } from '../commands/types';
import { CONFIG } from '../../config';

export class ForwardMessage implements IMessageHandler {
  public execute = async (ctx: Context<Update>): Promise<void> => {
    await ctx.forwardMessage(CONFIG.chat.main_forward_id);
  };
}
