require('dotenv').config();

let http = require('http');
let request = require('request');
const path = require('path')
const express = require('express')
const Discord = require('discord.js');
const client = new Discord.Client();


const token = process.env.YASUO_TOKEN;
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send('yasuo-bot'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  request.get({
    url: "https://discode-yasuo-bot.herokuapp.com/"
  }, function (error, response, body) {
    console.log(`Start ${new Date().toLocaleString()}`);
    });
});

const yasuoArray = ['ヤスオ', 'やすお', 'Yasuo', 'yasuo', 'YASUO', 'ﾔｽｵ'];
const hungrySummoners = ['!HS', '!hs'];
const hsWelcome = ['!welcome', '!Welcome'];

client.on('message', msg => {
  hsWelcome.forEach((welcome) => {
    if (msg.content == welcome) {
      msg.reply(process.env.HUNGRY_SUMMONERS_WELCOME);
    }
  });
  hungrySummoners.forEach((hs) => {
    if (msg.content == hs) {
      msg.reply(process.env.HUNGRY_SUMMONERS_INFO);
    }
  });

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

setInterval(function(){
  request.get({
    url: "https://discode-yasuo-bot.herokuapp.com/"
  }, function (error, response, body) {
    console.log(`Access ${new Date().toLocaleString()}`);
  });
}, 10 * 60 * 1000);

