const Discord = require('discord.js');

module.exports = {
	name: 'hufflepuff',
	description: 'Information about the Hufflepuff House',
	execute(message, args) {
        let hufflepuffEmbed = new Discord.RichEmbed()
            .setColor('#ecb939')
            .setTitle('Hufflepuff House')
            .setURL('https://www.pottermore.com/collection/all-about-hufflepuff')
            .setThumbnail('https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg')
            .addField('About', 'Hufflepuff is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. The emblematic animal is a badger, and yellow and black are its colours. The Head of Hufflepuff is Pomona Sprout and the Fat Friar is the House\'s patron ghost. ')
            .addField('Founder', '[Helga Hufflepuff](https://harrypotter.fandom.com/wiki/Helga_Hufflepuff)')
            .addField('Traits', 'Dedication\nHardworking\nFairness\nPatience\nKindness\nTolerance\nLoyalty')
            .addField('Famous Wizards', '[Cedric Diggory](https://harrypotter.fandom.com/wiki/Cedric_Diggory)\n[Pomona Sprout](https://harrypotter.fandom.com/wiki/Pomona_Sprout)')
            .addField('More Info', 'https://harrypotter.fandom.com/wiki/Hufflepuff');

		message.channel.send(hufflepuffEmbed);
	},
};