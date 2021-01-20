const graph = new Map();

graph.set(0, [7, 1]);
graph.set(1, [9]);
graph.set(9, [13]);
graph.set(13, []);

graph.set(7, [2,4,3]);
graph.set(2, []);
graph.set(4, []);
graph.set(3, []);

const searchQueque = [];


function isNeeded(n){
    return n === 13;
}

searchQueque.push(...graph.get(0));
let first = 0;
while (searchQueque !== undefined && searchQueque.length !== 0){
    first = searchQueque.shift();
    console.log(first);
    if(isNeeded(first)){
        console.log("Мы нашли его", first);
        break;
    }else{
        searchQueque.push(...graph.get(first));
    }
}