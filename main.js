// buggy script, please bugfix

var fave = [
  
]
var faveids = [
  
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
		sendChat("guys let's talk about the number " + Math.floor(Math.random()*100));
	}
}
// favenuming is cool ngl
if (cmd === "yap.favenum") {
  if (args.length == 0) {
		if (fave[faveids.indexOf(msg.p.id)] == -1) {
			sendChat("you don't have a favenum!");
    } else {
			sendChat("your favenum is " + fave[faveids.indexOf(msg.p.id)]);
    }
  	} else {
    	sendChat("cool favenum! your favenum was changed!")
    if (fave[faveids.indexOf(msg.p.id)] == -1) {
      faveids.push(msg.p.id)
      fave.push(msg.a.substring(11).trim());
    } else {
      fave[faveids.indexOf(msg.p.id)] = msg.a.substring(11).trim();
    }
  }
}
});
