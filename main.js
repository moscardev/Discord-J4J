const Discord = require('discord.js');
const client = new Discord.Client();
const map = new Map();
const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

client.on('ready', () => {
        console.log(`${client.user.username} adı ile giriş yapıldı!`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        if (map.get(msg.author.id) === 1) {
        } else {
            map.set(msg.author.id, 1)
           delay(3000)
           msg.channel.send("SINIRSIZ DİSCORD DAVET LİNKİ") // Discord sunucunuzun sınırsız davet bağlantısını yazın!    
           delay(7000)
           msg.channel.send("TAMAM")      
      }}}}})

client.on("ready", () => {
      setInterval(() => {

       client.channels.cache.get("MESAJ KANAL İD") // J4J Sunucusunun mesaj kanalının İD(sini) yazın!
       .send("Sunucuma katılmak isterseniz DM'ye gelebilirsiniz."); //Kanala göndermek istediğiniz mesajı yazın!

      }, 20000); // Her 20 saniyede bir kanala mesaj gönderir! - Not: Zaman milisaniye cinsinden akıyor!
})

client.login("TOKEN") // User Token