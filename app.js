var profile = require("./profile.js");
var users = process.argv.slice(3);
users.forEach(profile.get);