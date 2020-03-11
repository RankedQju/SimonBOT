const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

var mcping = require('mc-ping');
var mcCommand = 'mcstat'; // Command for triggering
var mcIP = '158.69.137.37'; // Your MC server IP or hostname address
var mcPort = 25565; // Your MC server port (25565 is the default)


client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', message => {
    if (message.content === mcCommand) {
        mcping(mcIP, mcPort, function(err, res) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*Minecraft server is currently offline*';
            if(body.online) {
                status = '**Minecraft** server is **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.reply(status);
        }, 3000);
    }
});
