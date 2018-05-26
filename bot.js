require('dotenv').config();
var http = require('http');
var request = require('request');

const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.YASUO_TOKEN;

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  request.get({
    url: "https://discode-yasuo-bot.herokuapp.com/"
  }, function (error, response, body) {
    console.log(`Start ${new Date().toLocaleString()}`);
  });
});

const yasuoArray = ['ヤスオ','やすお','Yasuo','yasuo','YASUO','ﾔｽｵ'];

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

setInterval(function(){
  request.get({
    url: "https://discode-yasuo-bot.herokuapp.com/"
  }, function (error, response, body) {
    console.log(`Access ${new Date().toLocaleString()}`);
  });
}, 29 * 60 * 1000);
