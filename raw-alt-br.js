var devs = [
	"6420abac45caf6db5876e564"
]
MPP.client.on("a", function (msg) {
// define base thingies
var args = msg.a.split(" ");
var cmd = args[0].toLowerCase();
args = args.slice(1);
var sendChat = function(msg) { MPP.chat.send(msg) };
var name = msg.p.name;
// make new topic to yap about
if (cmd === "yap.topic") {
	if (msg.p.id === "6420abac45caf6db5876e564" || msg.p.id === "ebb6dfa96f1714ce66f648ad") {
		sendChat("agora, vamos falar sobre " + Math.floor(Math.random()*100));
	}
}
if (cmd === "yap.amidev") {
	if (devs.indexOf(msg.p.id) == -1) {
		sendChat("Você... (bateria) ||NÃO é um desenvolvedor!||")
	} else {
		sendChat("Você... (bateria) ||É um desenvolvedor!||")
	}
}
if (cmd === "yap.source") {
	sendChat("Siga meu desenvolvimento em https://github.com/circuitdevguy/shircuit-yapper-bot!")
}
if (cmd === "yap.help") {
	sendChat("Os comandos faladores do falador! yap.source, yap.amidev, yap.topic") // update with each new command
}
});
