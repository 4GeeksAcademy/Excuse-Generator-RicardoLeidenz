"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap");
require("./style.css");
var who = ["My Dog", "My Grandma", "My Wife", "The president", "My instructor", "Alexander"];
var action = ["ate", "peed", "destroyed", "messed up", "stole", "took"];
var what = ["my homework", "the tv", "my car", "my boots", "my food", "my glasses"];
var when = ["before heading out.", "before class.", "before the meeting.", "after lunch.", "when i was asleep.", "at my wedding"];
function generateExcuse() {
    var whoDid = Math.floor(Math.random() * who.length);
    var whichAction = Math.floor(Math.random() * action.length);
    var whatDid = Math.floor(Math.random() * what.length);
    var whenDid = Math.floor(Math.random() * when.length);
    console.log(who[whoDid] + " " + action[whichAction] + " " + what[whatDid] + " " + when[whenDid]);
}
