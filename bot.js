require('dotenv').config();

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
