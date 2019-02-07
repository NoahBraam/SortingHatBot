module.exports = {
	name: 'sort',
	description: 'Sort the user into a house!',
	guildOnly: true,
	execute(message, args) {
		const roles = message.guild.roles;
		const {songs} = require('./helper/song.json');
		if (!roles.some(role => role.name === 'Hufflepuff')) {
			message.guild.createRole({
				name: 'Hufflepuff',
				color: '#ecb939',
			})
			.then(role => console.log(`Created new role with name ${role.name}`))
			.catch(console.error);
		}
		if (!roles.some(role => role.name === 'Ravenclaw')) {
			message.guild.createRole({
				name: 'Ravenclaw',
				color: '#222f5b',
			})
			.then(role => console.log(`Created new role with name ${role.name}`))
			.catch(console.error);
		}
		if (!roles.some(role => role.name === 'Slytherin')) {
			message.guild.createRole({
				name: 'Slytherin',
				color: '#2a623d',
			})
			.then(role => console.log(`Created new role with name ${role.name}`))
			.catch(console.error);
		}
		if (!roles.some(role => role.name === 'Gryffindor')) {
			message.guild.createRole({
				name: 'Gryffindor',
				color: '#ae0001',
			})
			.then(role => console.log(`Created new role with name ${role.name}`))
			.catch(console.error);
		}
		const member = message.member;
		if (member.roles.some(role => role.name === 'Slytherin') || member.roles.some(role => role.name === 'Hufflepuff') || member.roles.some(role => role.name === 'Ravenclaw') || member.roles.some(role => role.name === 'Gryffindor')) {
			message.reply(`Silly you, you've already been sorted!`);
			return;
		} else {
			let song = Math.floor(Math.random() * 3);
			message.author.send(songs[song]);
			if (song === 2) {
				message.author.send(songs[song + 1]);
				message.author.send(songs[song + 2]);
			}
			
		}
	},
};