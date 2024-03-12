const express = require("express");
const app = express();
app.listen(() => console.log("Bot is Online | 🌙"));
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const c = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');

////
const prefix = '!';//برفكس
const developers = process.env.DEVS;
/////
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/quran.html');
});
/////
client.on('ready', async () => {
	console.log(`Name Bot : ${client.user.tag} | 🌙`);
	client.user.setStatus('القران الكريم');
	client.user.setActivity(`القران الكريم`, { type: 'PLAYING' });
});

///الاكواد

client.on("message",async m=>{
  if(m.content.toLowerCase() ===prefix + (`شغل`)){
    if(!m.member.voice.channel)return m.reply(new MessageEmbed().setAuthor(m.author.username,m.author.avatarURL({dynamic:true})).addField(`:x:`,`اخي العزيز الرجاء دخولك الئ الروم | :x:`))
  quran(m.member.voice.channel)
  m.channel.send(new MessageEmbed().setAuthor(m.author.username,m.author.avatarURL({dynamic:true})).setDescription(`**تم تشغيل القران الكريم | 🌙**`));
  }
})
async function quran(quranAudio) {
  let url = "https://youtu.be/U36il97iEI0"
  const broadcast = client.voice.createBroadcast()
  let connection = await quranAudio.join()
  broadcast.play(ytdl(url), { quality: 'highestaudio' })
  connection.play(broadcast)
}

///

const cd = require("countdown")
    client.on("message",async message=>{
    if (message.content ===prefix + `نهايه`) {
      let randmanmsg = await message.channel.send(`🌙 | . نهاية رمضان بعد`)
        setInterval(async function () {
          var time = cd(new Date().getTime(), new Date("April 20, 2023 00:00:00").getTime());
        randmanmsg.edit(new MessageEmbed().setColor("#c5bf16").setTitle(":رمضان 2022").addField(`**كم متبقي على نهايه رمضان؟**`,`متبقي على نهايه رمضان\n \`\`\`${time}\`\`\``))
        },20000);
    }
})

    client.on("message",async message=>{
    if (message.content ===prefix +  `رمضان-القادم`) {
      let randmanmsg = await message.channel.send(`🌙 | . رمضان القادم بعد`)
        setInterval(async function () {
          var time = cd(new Date().getTime(), new Date("March 9, 2024 00:00:00").getTime());
        randmanmsg.edit(new MessageEmbed().setColor("#c5bf16").setTitle(":رمضان 2023").addField(`**كم متبقي على رمضان؟**`,`متبقي على القادم رمضان\n \`\`\`${time}\`\`\``))
        },20000);
    }
})

////

client.on('message',dastar => {
  if(dastar.content.startsWith(prefix + "اذكار")){
    let reply =[
      "اللهم اغفر لي خطيئتي وجهلي وإسرافي في أمري وما أنت اعلم به مني اللهم اغفر لي جَدِّي وهزلي وخطئي وعمدي وكل ذلك عندي اللهم اغفر لي ما قدمت وما أخرت وما أسررت وما أعلنت وما أنت أعلم به مني أنت المقدم وأنت المؤخر وأنت علي كل شيء قدير [متفق علية]",
      "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه [الترمذي]",
      "سبحانك اللهم وبحمدك اللهم اغفر لي [متفق علية]",
      "اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا علي عهدك ووعدك ما استطعت أعوذ بك من شر ما صنعت وأبؤ لك بنعمتك علي وابؤ لك بذنبي فاغفر لي فانه لا يغفر الذنوب إلا أنت [رواه البخاري]",
      "عن أبي هريرة رضى الله عنه أن رسول الله صلى الله عليه وسلم قال:”ينـزلُ ربُّنا تبارَكَ وتعالى كلّ ليلةٍ إلى سماءِ الدنيا, حينَ يَبقى ثُلثُ الليلِ الآخرُ فيقولُ: مَن يدعوني؟ فأستجيبَ لهُ, من يسألُني؟ فأعطِيَه, من يستغفرُني؟ فأغفر له. رواه البخاري",
      "اللهم أنت ربي لا إله إلا أنت، خلقْتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعتُ، أعوذ بك من شر ما صنعتُ، أبوء لك بنعمتك عليّ، وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت” قال: “من قالها بالنهار موقنًا بها، فمات من يومه قبل أن يُمْسِي؛ فهو من أهل الجنة، ومن قالها من الليل، وهو موقن بها، فمات قبل أن يُصْبِح؛ فهو من أهل الجنة”. رواه البخاري.",
      "عن أنس رضى الله عنه قال سمعت رسول اللهصلى الله عليه وسلم يقول: “قال الله يا ابنَ آدمَ! إنّك ما دَعوتَني ورجَوتَني, غفرتُ لكَ عَلَى ما كانَ منكَ, ولا أُبَالي, يا ابنَ آدَمَ! لو بلَغَتْ ذنُوبُكَ عنَانَ السَّماءِ, ثمّ استغفرتَنِي غفرتُ لكَ, ولا أُبَالي, يا ابن آدَمَ إنّكَ لو أتَيتنِي بِقُرَابِ الأرضِ خطَايَا ثمّ لقِيتَني لا تُشرِكُ بي شيئاً, لأتيتُك بقُرابها مغفرةً. [صحيح الترمذي]",
      "عن أبي سعيد الخدري رضى الله عنه عن النبي صلى الله عليه وسلم قال: قال إبليسُ: وعَزّتك لا أبرح أُغوي عبادك ما دامت أرواحهم في أجسادهم فقال: وعِزّتي وجلالي, لا أزال أغفرَ لهم ما اسْتغفروني [صحيح الترغيب]",
      "قُلِ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الغفور الرحيم. [متفق عليه]",
      "سيد الاستغفار أن تقول: اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، إِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. وَمَنْ قَالَهَا مِنَ النَّهَارِ مُوقِنًا بِهَا، فَمَاتَ مِنْ يَوْمِهِ قَبْلَ أَنْ يُمْسِيَ، فَهُوَ مِنْ أَهْلِ الجَنَّةِ، وَمَنْ قَالَهَا مِنَ اللَّيْلِ وَهُوَ مُوقِنٌ بِهَا، فَمَاتَ قَبْلَ أَنْ يُصْبِحَ، فَهُوَ مِنْ أَهْلِ الجَنَّةِ. [رواه البخاري].",
  "اللهم اجعل لي قلباً لايتكاسل عن الصلاه وفعل الخير اللهم اجعل صلاتي خير لي من الدنيا ومافيها",
  "إِنَّ اللَّهَ وَمَلائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
  "كُلُّ مَنْ عَلَيْهَا فَانٍ ۝ وَيَبْقَى وَجْهُ رَبِّكَ ذُو الْجَلالِ وَالإكْرَامِ",
  "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إلَّا هُوَ الْحَيُّ القَيُّومُ وَأَتُوبُ إِلَيهِ",
      
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
dastar.channel.send(`${an}`)
  }
});


////🕋


client.on('message', message => { 
  var helplist = `**: 🕋 أوامر البوت 

> ${prefix}شغل
: لتشغيل القران الكريم
> ${prefix}اذكار
: لرسائل اذكار عشوائيه
> ${prefix}رمضان-القادم : 
لمعرفة كم متبقئ علئ رمضان 2024
> ${prefix}نهايه
: لمعرفة متئ راح يخلص رمضان 2023
**
اخر تحديث هو في عام (2023/3/23)
(بوت قران الكريم + بحقوق داستر)`
  if(message.content === prefix + 'help') {
            message.delete(1000) 
    let e = '** تم أرسال لك الاوامر | ✅**'
	  message.reply(e).then(m => m.delete(1000))
	  message.author.send(helplist).catch(error => message.reply('**اخي لا يمكنني ارسال لك اوامر الخاصه بي | من سبب : انك مقفل خاصك | :x: **')) 
}
});

///لا تلعب بكود
client.login(process.env.token)