const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Prem Babu")==0 || (event.body.indexOf("Prem")==0 || (event.body.indexOf("Tonmoy")==0 || (event.body.indexOf("তন্ময়")==0)))) {
		var msg = {
				body: "Hmm... আমার বস তন্ময় এখন অনেক বিজি প্রোয়জনীয় কথা থাকলে ইনবক্সে নক দিয়ে রাখুন ফেইসবুক linkhttps://www.facebook.com/tonmoy221?mibextid=ZbWKwL😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
