import "bootstrap";
import "./style.css";

let who :string[] = ["My Dog","My Grandma","My Wife","The president","My instructor","Alexander"];
let action :string[] = ["ate","peed","destroyed","messed up","stole","took"];
let what :string[] = ["my homework","the tv","my car","my boots","my food","my glasses"];
let when :string[] = ["before heading out.","before class.","before the meeting.","after lunch.","when i was asleep.","at my wedding"];

function generateExcuse() {
  let whoDid :number = Math.floor(Math.random() * who.length - 1);
  let whichAction :number = Math.floor(Math.random() * action.length - 1);
  let whatDid :number = Math.floor(Math.random() * what.length - 1);
  let whenDid :number = Math.floor(Math.random() * when.length - 1);
  console.log(who[whoDid] + " " + action[whichAction] + " " + what[whatDid] + " " + when[whenDid])
}