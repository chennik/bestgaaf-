require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.login(TOKEN);



client.on("ready", ()=> {
  var testChannel= client.channels.find(channel => channel.id === "644840031751766019" );

  console.log("time for loving");

  setInterval(() => {
 testChannel.send ("https://www.youtube.com/watch?v=SYnVYJDxu2Q");
  }, 43200000);

  setInterval(() => {
    testChannel.send("The greatest love machine of all time");
  }, 43205000);

});



client.on('message', msg => {
    if (msg.content === 'hit me') {
        msg.reply('There lived a certain man in Russia long ago, He was big and strong, in his eyes a flaming glow');
       

    }


    else if (msg.content.startsWith("rasputin"))
    {

      msg.channel.send("https://www.youtube.com/watch?v=SYnVYJDxu2Q") ;
    }

    else if ( msg.content === "help"){
      msg.reply ("rasputin will be reposted every 12 hours, type rasputin if you cant wait this long");
    }

    else if ( msg.content === 'mythic') {
        msg.reply( " here are the mythic plus affixes for this week :https://mythicpl.us/ ");
    }
});




