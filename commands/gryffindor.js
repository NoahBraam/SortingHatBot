const Discord = require('discord.js');

module.exports = {
	name: 'gryffindor',
	description: 'Information about the Gryffindor House',
	execute(message, args) {
        let gryffindorEmbed = new Discord.RichEmbed()
            .setColor('#740001')
            .setTitle('Gryffindor House')
            .setURL('https://www.pottermore.com/collection/all-about-gryffindor')
            .setThumbnail('https://www.hp-lexicon.org/wp-content/uploads/2015/08/gryffindor-shield-200x0-c-default.jpg')
            .addField('About', 'Gryffindor is one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Godric instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, and determination, to be Sorted into his house. The emblematic animal is a lion, and its colours are scarlet and gold. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick" is the House ghost.')
            .addField('Founder', '[Godrick Gryffindor](https://harrypotter.fandom.com/wiki/Godric_Gryffindor)')
            .addField('Traits', 'Bravery\nNerve\nCourage\nChivalry\nDaring')
            .addField('Famous Wizards', '[Harry Potter](https://harrypotter.fandom.com/wiki/Harry_Potter)\n[Albus Dumbledore](https://harrypotter.fandom.com/wiki/Albus_Dumbledore)\n[The Weasleys](https://harrypotter.fandom.com/wiki/Weasley_family)\n[Hermione Granger](https://harrypotter.fandom.com/wiki/Hermione_Granger)')
            .addField('More Info', 'https://harrypotter.fandom.com/wiki/Gryffindor');

		message.channel.send(gryffindorEmbed);
	},
};