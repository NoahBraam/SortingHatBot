const Discord = require('discord.js');
const quiz = require('./questions.json');
module.exports = {
    quiz(message) {
        return new Promise((resolve, reject) => {
            const item = quiz[Math.floor(Math.random() * quiz.length)];

            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };

            let answerString = createAnswerString(item.answers);

            let questionEmbed = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .addField(item.question, answerString)
                .setThumbnail(item.thumbnail);

            message.author.send(questionEmbed).then(sentMessage => {
                sentMessage.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        sentMessage.channel.send(`Hmm, yes, very good!`);
                        let houseName = collected.first().content;
                        resolve(houseName);
                    })
                    .catch(() => {
                        reject('Could not sort.');
                    });
            });
        });
    }
}

function createAnswerString(answers) {
    var i;
    var answerString = "";

    for (i = 0; i<answers.length; i++) {
        answerString += `${i+1}) ${answers[i]}\n`;
    }
    return answerString;
}