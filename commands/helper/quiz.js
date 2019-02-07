const quiz = require('./questions.json');
module.exports = {
    quiz(message) {
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        message.author.send(item.question);
    }
}