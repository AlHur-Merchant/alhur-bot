import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, name, version } from '../../package.json';

const debug = createDebug('bot:about_command');

const website = () => async (ctx: Context) => {
  const message = `
  خدمات تطوير الويب تشمل إنشاء وتحسين المواقع الإلكترونية بتصميم سهل الاستخدام وجذاب. تهدف لتحسين تجربة المستخدم وتعزيز الوجود الرقمي للشركات عبر الإنترنت.
  Web development services encompass the creation and enhancement of websites with user-friendly and attractive designs. The goal is to improve the user experience and enhance the digital presence of businesses online.  
/start
/Services
`;
  debug(`Triggered "website" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { website };