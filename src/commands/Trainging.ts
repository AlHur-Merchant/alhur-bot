import { Context } from 'telegraf';
import createDebug from 'debug';


const debug = createDebug('bot:about_command');

const Trainging = () => async (ctx: Context) => {
  const message = ` يقدم مركز بابلون مجموعة متنوعة من الدورات التدريبية لانشاء المواقع الاكترونية وتسجيل النطاق والاستضافة
  Babylon Center offers a diverse range of training courses for website development, domain registration, and hosting.
  /start
/Services
`;
  debug(`Triggered "website" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { Trainging };