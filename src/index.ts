import { Telegraf } from 'telegraf';

import { about, Bots, host, Social, Trainging, website } from './commands';
import { greeting, servicing } from './text';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';

const BOT_TOKEN = process.env.TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);


const webLink = 'https://alhur.vercel.app/';
const channelId = '@babyloncenter_net'; // Replace with your channel username or ID



bot.start((ctx) =>
  ctx.reply('اهلا وسهلا بكم في شركة الحرة العراقية!', {
    reply_markup: {
      keyboard: [[{ text: 'اضغط هنا لفتح قائمة المواد', web_app: { url: webLink } }]],
    },
  })
);
let shouldSendChannelMessage = true;  // Set this flag based on your condition


bot.on('message', async (ctx) => {
  try {
    // Use 'any' type to avoid TypeScript errors
    const receivedData = JSON.parse((ctx.message as any).web_app_data.data);

    const cartItems = receivedData.cartItems;
    const phoneNumber = receivedData.phoneNumber;
    const address = receivedData.address;
    const notice = receivedData.notice;
    const totalPrice = receivedData.totalPrice;
     const totalItems = receivedData.totalItems// Add total count
     const storeName = receivedData.storeName;

    // Create an array to store the details of each item
    const orderDetails = [];

    for (const item of cartItems) {
      const title = item.title;
      const price = item.price;
      const quantity = item.quantity;
      const description = item.description

      // Add details to the array
       orderDetails.push(`- المادة: ${title}\n  التفاصيل: ${description}\n  السعر: ${price}\n  العدد: ${quantity}\n`);
    }

    // Join the array elements into a single string
    const orderMessage = orderDetails.join('\n');

    // Send the order message
    ctx.replyWithMarkdown(
      `**${ctx.from.first_name}**\n` +
      `تم ارسال الطلب التالي:\n\n` +
      `${orderMessage}\n` +
      `**اجمالي الفاتورة: د ${totalPrice.toFixed(2)}**\n` +
      `**اجمالي المواد :** ${totalItems}\n` +
      `**اسم المحل:** ${storeName}\n` +
      `**رقم الهاتف:** ${phoneNumber}\n` +
      `**العنوان:** ${address}\n` +
      `**الملاحظات:** ${notice}`
    );

    // Prepare a message for the channel
    const channelMessage = `تم استلام طلب جديد:\n` +
      `**${ctx.from.first_name}**\n\n` +
      `${orderMessage}\n` +
      `**اجمالي الفاتورة: د ${totalPrice.toFixed(2)}**\n` +
      `**اجمالي المواد :** ${totalItems}\n` +
      `**اسم المحل:** ${storeName}\n` +
      `**رقم الهاتف:** ${phoneNumber}\n` +
      `**العنوان:** ${address}\n` +
      `**الملاحظات:** ${notice}`;

    // Log and send the message to the channel
    if (shouldSendChannelMessage) {
      console.log('Sending message to channel:', channelMessage);
      try {
        const result = await bot.telegram.sendMessage(channelId, channelMessage, { parse_mode: 'Markdown' });
        console.log('Telegram API result:', result);
      } catch (error) {
        console.error('Telegram API error:', error);
      }
    }
  } catch (error) {
    console.error('Error parsing received data:', error);
  }
});



//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};

//dev mode
ENVIRONMENT !== 'production' && development(bot);
export { bot };

