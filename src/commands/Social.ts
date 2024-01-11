import { Context } from 'telegraf';
import createDebug from 'debug';



const debug = createDebug('bot:about_command');

const Social = () => async (ctx: Context) => {
  const message = `                تسويق وسائل التواصل الاجتماعي هو نهج استراتيجي لتعزيز المنتجات أو الخدمات أو العلامات التجارية عبر منصات وسائل التواصل الاجتماعي المختلفة، باستخدام محتوى جذاب والتفاعل للوصول والتواصل مع جمهور مستهدف.
  Social media marketing is a strategic approach to promoting products, services, or brands through various social media platforms, leveraging engaging content and interaction to reach and connect with a targeted audience.
  /start
  /Services

`;
  debug(`Triggered "Social" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { Social };