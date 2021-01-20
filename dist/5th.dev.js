"use strict";

var graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggie"];
graph.alice = ['peggie'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggie = [];
graph.thom = [];
graph.jonny = [];
var queque = [1, 2];

while (typeof queque !== 'undefined' && queque.length > 0) {
  queque.pop();
  console.log(queque);
}