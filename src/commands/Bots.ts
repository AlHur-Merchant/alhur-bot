import { Context } from 'telegraf';
import createDebug from 'debug';


const debug = createDebug('bot:about_command');

const Bots = () => async (ctx: Context) => {
  const message = ` يتميز مركز بابلون في إنشاء روبوتات تيليغرام مخصصة لتعزيز التواصل وتأتي بتجربة تلقائية للمهام. يرشد خبراؤنا خلال العملية، متكاملين بسلاسة مع خدمات تسجيل النطاق والاستضافة.
  Babylon Center excels in creating custom Telegram bots to elevate your communication and automate tasks. Our experts guide you through the process, seamlessly integrating with domain registration and hosting services.
  /start
/Services
`;
  debug(`Triggered "bots" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { Bots };