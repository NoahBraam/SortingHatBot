module.exports = {
	name: 'houses',
	description: 'Info about the different houses',
	execute(message, args) {
        message.channel.send('There are 4 different houses: Gryffindor, Hufflepuff, Ravenclaw and Slytherin');
        message.channel.send('To learn more about a particular house, use !slytherin, !ravenclaw, !hufflepuff or !gryffindor');
	},
};