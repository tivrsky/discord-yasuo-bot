require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.YASUO_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const yasuoArray = ['ヤスオ','やすお','Yasuo','yasuo'];

client.on('message', msg => {
  
  yasuoArray.forEach(function(yasuo){
    if(~msg.content.indexOf(yasuo)){
      if(Math.random() > 0.5){
        msg.reply('▭ι═════════ﺤ HASAKI');
      }else{
        msg.reply('HASAKI --|------------->:cloud_tornado:');
      }
    }
  });
  
});

client.login(token);

