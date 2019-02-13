const Discord = require('discord.js');
const quiz = require('./questions.json');
module.exports = {
    quiz(message) {
        const item = quiz[Math.floor(Math.random() * quiz.length)];

        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        let answerString = `1) ${item.answers[0]}\n2) ${item.answers[1]}\n3) ${item.answers[2]}\n4) ${item.answers[3]}`;

        let questionEmbed = new Discord.RichEmbed()
            .setColor('#FFFFFF')
            .addField(item.question, answerString)
            .setThumbnail('https://i.pinimg.com/originals/f2/25/c8/f225c8ce29fafe8a1757312bac4c8e3c.jpg');

        message.author.send(questionEmbed).then(sentMessage => {
            sentMessage.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    sentMessage.channel.send(`Hmm, yes, very good!`);
                    let houseName = collected.first().content;
                    let houseRole = message.guild.roles.find(role => role.name.toLowerCase() === houseName);
				    message.member.addRole(houseRole);
                })
                .catch(collected => {
                    sentMessage.channel.send('Way to answer, idiot.');
                });
        });
    }
}