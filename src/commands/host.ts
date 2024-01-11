import { Context } from 'telegraf';
import createDebug from 'debug';



const debug = createDebug('bot:about_command');

const host = () => async (ctx: Context) => {
  const message = `                خدمة استضافة الويب توفر البنية التحتية والتقنيات اللازمة لجعل المواقع متاحة على الإنترنت، مضمونة الإتاحة والأداء للمستخدمين في جميع أنحاء العالم.             
  Web hosting service provides the necessary infrastructure and technologies to make websites accessible on the internet, ensuring their availability and performance for users worldwide.
  /start
  /Services
`;
  debug(`Triggered "hosting" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { host };