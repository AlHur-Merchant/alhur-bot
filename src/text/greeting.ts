// import { Context } from 'telegraf';
// import createDebug from 'debug';

// const debug = createDebug('bot:greeting_text');

// const replyToMessage = (ctx: Context, messageId: number, string: string) =>
//   ctx.reply(string, {
//     reply_to_message_id: messageId,
//   });

// const greeting = () => async (ctx: Context) => {
//   debug('Triggered "greeting" text command');

//   const messageId = ctx.message?.message_id;
//   const userName = `${ctx.message?.from.first_name}`;

//   if (messageId) {
//     await replyToMessage(ctx, messageId, `  اهلا وسهلا بك في بابلون!${userName} 
//   لتصفح خدماتنا.  /services`);
//   }
// };

import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const greeting = () => async (ctx: Context) => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name}`;

  if (messageId) {
    await replyToMessage(ctx, messageId, `  اهلا وسهلا بك في بابلون!${userName} 
  لتصفح خدماتنا.  /services`);
  }

  // Add the web app link
  const webLink = 'https://testingbot-8rcz.onrender.com';
  //const channelId = '@babyloncenter_net'; // Replace with your channel username or ID

  ctx.reply('Welcome :)))))', {
    reply_markup: {
      keyboard: [[{ text: 'web app', web_app: { url: webLink } }]],
    },
  });
};

export { greeting };



// export { greeting };
