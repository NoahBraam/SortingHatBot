module.exports = {
	name: 'help',
	description: 'Help!',
	execute(message, args) {
		message.channel.send('Help is on the way!');
	},
};