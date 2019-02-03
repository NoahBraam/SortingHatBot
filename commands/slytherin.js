const Discord = require('discord.js');

module.exports = {
	name: 'slytherin',
	description: 'Information about the Slytherin House',
	execute(message, args) {
        let slytherinEmbed = new Discord.RichEmbed()
            .setColor('#1a472a')
            .setTitle('Slytherin House')
            .setURL('https://www.pottermore.com/collection/all-about-slytherin')
            .setThumbnail('https://cdn.shopify.com/s/files/1/0006/8213/1492/products/Slytherin_Hogwarts_House_Crest_-_Harry_Potter_1024x1024.jpg?v=1547596686')
            .addField('About', 'Slytherin is one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics include: cunning, resourcefulness, and ambition. Many Slytherin students tend to clique together, often acquiring leaders, which further exemplifies Slytherin\'s ambitious qualities. Examples of these include Draco Malfoy’s Gang and the Death Eaters.')
            .addField('Founder', '[Salazar Slytherin](https://harrypotter.fandom.com/wiki/Salazar_Slytherin)')
            .addField('Traits', 'Resourcefulness\nCunning\nAmbition\nDetermination\nSelf-Preservation\nFraternity\nCleverness')
            .addField('Famous Wizards', '[Serverus Snape](https://harrypotter.fandom.com/wiki/Severus_Snape)\n[Merlin](https://harrypotter.fandom.com/wiki/Merlin)\n[Tom Marvolo Riddle](https://harrypotter.fandom.com/wiki/Tom_Riddle)')
            .addField('More Info', 'https://harrypotter.fandom.com/wiki/Slytherin');

		message.channel.send(slytherinEmbed);
	},
};