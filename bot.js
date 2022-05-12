require("dotenv").config()

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "yassify"
var yas_me = ""
var ends = ["😍","🏳️‍🌈","🌈","💅","🤪", ":)", ":D", "mwa"]
const regex = /(?<=^\S+\s.*)\S/g;

client.on("ready", () => {
  console.log("Mr. bot is ready to go!!!!")
})

client.on("messageCreate", msg => {
    
  if (msg.content.startsWith(`${BOT_PREFIX}${MOD_ME_COMMAND}`)) {
    let random = Math.floor(Math.random() * ends.length);
    let randomtwo = Math.floor(Math.random() * ends.length);
  
    yas_me = msg.content.replace('!yassify','')
    yas_me = yas_me.toLowerCase()
    yas_me = yas_me.replace('yes','YAAAASSSS🤩')
    yas_me = yas_me.replace('no','NAAUUURRR😫')
    yas_me = yas_me.replace('.','!!!')
    yas_me = yas_me.replace('?','🥺?!?')
    yas_me = yas_me.replace('his','h*s')
    yas_me = yas_me.replace('league','le*gue')
    yas_me = yas_me.replace('yay','🥳SLAAAYYYY')
    yas_me = yas_me.replace('god','lana del rey')
    yas_me = yas_me.replace('love','l💗💜💙ve')
    yas_me = yas_me.replace('hi','hiiiii')
    yas_me = yas_me.replace('hello','helllooo')
    yas_me = yas_me.replace('man','femboy')
    yas_me = yas_me.replace('woman','QUEEN')
    yas_me = yas_me.replace('straight','stra*ght')
    yas_me = yas_me.replace('julia','julussy')
    yas_me = yas_me.replace('aurora','aurorussy')
    yas_me = yas_me.replace('luke','lukussy')
    yas_me = yas_me.replace('david','davussy')
    yas_me = yas_me.replace('emmit','emmussy')
    yas_me = yas_me.replace('andy','andussy')
    yas_me = yas_me.replace('antonio','antussy')
    yas_me = yas_me.replace('marry','m͓̽a͓̽r͓̽r͓̽y͓̽')
    yas_me = yas_me.replace('kill','𝓼𝓵𝓪𝓾𝓰𝓱𝓽𝓮𝓻')
    yas_me = yas_me.replace('cool','𝕔𝕒𝕞𝕡')
    yas_me = yas_me.replace('awesome','𝕔𝕒𝕞𝕡')
    yas_me = yas_me.replace('epic','𝕔𝕒𝕞𝕡')
    yas_me = yas_me.replace('good','𝕔𝕒𝕞𝕡')
    yas_me = yas_me.replace('bad','𝕔𝕒𝕞𝕡')
    yas_me = yas_me.replace('terrible','𝕔𝕒𝕞𝕡')
    yas_me = yas_me.replace('so','so very incredibly')
    yas_me = yas_me.replace('i see','eye sea')

    yas_me = yas_me.concat(" ", ends[random], ends[randomtwo])
    

    if (yas_me != "" && yas_me != " "){
        msg.channel.send(yas_me)
    }
    
  }
})


client.login(process.env.BOT_TOKEN)