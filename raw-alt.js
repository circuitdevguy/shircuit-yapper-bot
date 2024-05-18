MPP.client.on("a", function (msg) {
// define base thingies
var args = msg.a.split(" ");
var cmd = args[0].toLowerCase();
args = args.slice(1);
var sendChat = function(msg) { MPP.chat.send(msg) };
var name = msg.p.name;
// command things
if (cmd === "yap.topic") {
	if (msg.p.id === "6420abac45caf6db5876e564" || msg.p.id === "ebb6dfa96f1714ce66f648ad") {
		sendChat("guys let's talk about the number " + Math.floor(Math.random()*100));
	}
}
});
