import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const servicing = () => async (ctx: Context) => {
  debug('Triggered "service" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name}`;

  if (messageId) {
    await replyToMessage(ctx, messageId, `
    يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعةابرزها
    /Website creation. انشاء مواقع الكترونية
    /Host servises. خدمات الاستضافة
    /Social Marketing. التسويق الالكتروني
    /Training courses. الدورات التدريبية
    /Telegram Bots. روبوتات تيليغرام
    

  ` );
  }
};

export { servicing };

// import { Context, Markup } from 'telegraf';
// import createDebug from 'debug';

// const debug = createDebug('bot:greeting_text');

// const replyToMessage = (ctx: Context, messageId: number, text: string) =>
//   ctx.reply(text, {
//     reply_to_message_id: messageId,
//   });

// const servicing = () => async (ctx: Context) => {
//   debug('Triggered "service" text command');

//   const messageId = ctx.message?.message_id;
//   const userName = `${ctx.message?.from.first_name}`;

//   if (messageId) {
//     await replyToMessage(ctx, messageId, `
//     يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعةابرزها
//   `);

//   // Use inline keyboard for services
//   await ctx.reply('Choose a service:', {
//     reply_markup:Markup.inlineKeyboard([
//       Markup.button.callback('Website Creation', 'website'),
//       Markup.button.callback('Host Services', 'hosting'),
//       Markup.button.callback('Social Marketing', 'instagram'),
//       Markup.button.callback('Training Courses', 'web'),
//       Markup.button.callback('Telegram Bots', 'telegram'),
//     ]) as any,
//   });
//   }
// };

// export { servicing };


// import { Context, Markup } from 'telegraf';
// import createDebug from 'debug';
// import { bot } from '../index'
// const debug = createDebug('bot:greeting_text');

// const replyToMessage = (ctx: Context, messageId: number, string: string) =>
//   ctx.reply(string, {
//     reply_to_message_id: messageId,
//   });

// const servicing = () => async (ctx: Context) => {
//   debug('Triggered "service" text command');

//   const messageId = ctx.message?.message_id;

//   if (messageId) {
//     await replyToMessage(ctx, messageId, `
//     يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعة ابرزها
//     `);

//     // Use inline keyboard for services
//     await ctx.reply('Choose a service:', {
//       reply_markup: Markup.inlineKeyboard([
//         Markup.button.callback('Website Creation', 'Website'),
//         Markup.button.callback('Host Services', 'Hosting'),
//         Markup.button.callback('Social Marketing', 'SocialMedia'),
//         Markup.button.callback('Training Courses', 'Training'),
//         Markup.button.callback('Telegram Bots', 'TelegramBot'),
//       ]).reply_markup,
//     });
//   }
// };



// // Assuming you have a function to handle callback queries
// // Assuming you have a function to handle callback queries
// bot.on('callback_query', (ctx: Context & { callbackQuery?: { data?: string } }) => {
//   const callbackQuery = ctx.callbackQuery;

//   if (callbackQuery && callbackQuery.data) {
//     const callbackData = callbackQuery.data;
//     // Handle different callback data
//     if (callbackData === 'Website') {
//       ctx.reply('You selected Website Creation.');
//     } else if (callbackData === 'Hosting') {
//       ctx.reply('You selected Host Services.');
//     } else if (callbackData === 'SocialMedia') {
//       ctx.reply('You selected Social Marketing.');
//     } else if (callbackData === 'Training') {
//       ctx.reply('You selected Training Courses.');
//     } else if (callbackData === 'TelegramBot') {
//       ctx.reply('You selected Telegram Bots.');
//     }
//   }
// });


// export { servicing };
