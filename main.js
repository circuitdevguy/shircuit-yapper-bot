MPP.client.on("a", function (msg) {
// define base thingies
var args = msg.a.split(" ");
var cmd = args[0].toLowerCase();
args = args.slice(1);
var sendChat = function(msg) { MPP.chat.send(msg) };
var name = msg.p.name;
// make new topic to yap about
if (cmd === "yap.topic") {
	sendChat("guys let's talk about the number " + Math.floor(Math.random()*100));
}
if (cmd === "yap.source") {
	sendChat("follow my development via GitHub at https://github.com/circuitdevguy/shircuit-yapper-bot")
}
if (cmd === "yap.help") {
	sendChat("i have lots of commands, check them out in this list my developer provided conveniently for you! yap.source, yap.amidev, yap.topic") // update with each new command
}
});
