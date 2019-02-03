const Discord = require('discord.js');

module.exports = {
	name: 'ravenclaw',
	description: 'Information about the Ravenclaw House',
	execute(message, args) {
        let ravenclawEmbed = new Discord.RichEmbed()
            .setColor('#0e1a40')
            .setTitle('Ravenclaw House')
            .setURL('https://www.pottermore.com/collection/all-about-ravenclaw')
            .setThumbnail('https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg')
            .addField('About', 'Ravenclaw is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was a medieval witch Rowena Ravenclaw. Members of this house are characterised by their wit, learning, and wisdom. The emblematic animal is symbol is an eagle, and blue and bronze are its colours. The Head of Ravenclaw is Filius Flitwick and the house ghost is the Grey Lady, otherwise known as Helena Ravenclaw.')
            .addField('Founder', '[Rowena Ravenclaw](https://harrypotter.fandom.com/wiki/Rowena_Ravenclaw)')
            .addField('Traits', 'Intelligence\nWit\nWisdom\nCreativity\nOriginality\nIndividuality\nAcceptance')
            .addField('Famous Wizards', '[Luna Lovegood](https://harrypotter.fandom.com/wiki/Luna_Lovegood)\n[Filius Flitwick](https://harrypotter.fandom.com/wiki/Filius_Flitwick)\n[Gilderoy Lockheart](https://harrypotter.fandom.com/wiki/Gilderoy_Lockhart)')
            .addField('More Info', 'https://harrypotter.fandom.com/wiki/Ravenclaw');

		message.channel.send(ravenclawEmbed);
	},
};