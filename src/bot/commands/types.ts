import { type Context } from 'telegraf';

export interface ICommand {
  execute(ctx: Context): Promise<void>;
}
export interface IMessageHandler {
  execute(ctx: Context): Promise<void>;
}
