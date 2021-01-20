// Breadth First Search 
const graph = new Map();

graph.set(0, [7, 1]);
graph.set(1, [9]);
graph.set(9, [13]);
graph.set(13, []);

graph.set(7, [2,4,3]);
graph.set(2, []);
graph.set(4, []);
graph.set(3, []);




function breadthFirstSearch(graph, n){

    function isNeeded(){
        return n === first;
    }

    const searchQueque = [];
    searchQueque.push(...graph.get(0));
    let first = 0;
    while (searchQueque !== undefined && searchQueque.length !== 0){
        first = searchQueque.shift();
        console.log(first);
        if(isNeeded(first)){
            console.log(`We found ${first}`);
            return first;
        }else{
            searchQueque.push(...graph.get(first));
        }
    }
    return null;
}

breadthFirstSearch(graph, 13);