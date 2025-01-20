function knightMoves(start, end) {
    const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]; // [x,y]
    let queue = [ start ];
    let visited = new Set();
    let count = 0;
    
    while(queue.length) {
        let next = [];
        while(queue.length) {
            const current = queue.shift();
        
            if(current[0] === end[0] && current[1] === end[1]) {
                console.log(current, count);
                return
            }
        
            
            for(let move of moves) {
                let newCords = [current[0] + move[0], current[1] + move[1]];
                
                if(!visited.has(newCords[0] + "," + newCords[1])) {

                    if(newCords[0] >= 0 && newCords[1] >= 0 && newCords[0] <= 7 && newCords[0] <= 7) {
                        next.push([newCords[0], newCords[1]]);
                        visited.add(newCords[0] + "," + newCords[1]);
                    }
                }
            }
        }
        count++;
        queue = next;
    }
};

//knightMoves([0, 0], [7, 7]);

function newKnight(start, end) {
    const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]; // [x,y]
    let queue = [ start ];
    let visited = new Set();
    let count = 0;
    
    while(queue.length) {
        let next = [];
            while(queue.length) {
                let current = queue.shift();
                let currentX = current[0];
                let currentY = current[1];

                if(currentX === end[0] && currentY === end[1]) {
                    console.log(current, count);
                    return
                }

                for(let move of moves) {
                    let nextX = currentX + move[0];
                    let nextY = currentY + move[1];

                    if(!visited.has(nextX + "," + nextY)) {
                        visited.add(nextX + "," + nextY);
                        next.push([nextX, nextY]);
                    }
                }
            }
            count++;
            queue = next;
    }

};

function testMoves(start, end) {
    const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]; // [x,y]
    let queue = [ start ];
    let visited1 = new Set();
    let count = 0;
    let temp = [];
    console.log(temp)

    while(queue.length) {
        let next = [];
        while (queue.length) {
            let current = queue.shift();
            temp.push(current)

            if(current[0] === end[0] && current[1] === end[1]) {
                console.log(current, count);
                return;
            }

            for(let move of moves) {
                let newC = [current[0] + move[0], current[1] + move[1]];
                
                if(!visited1.has(newC)) {
                    if(newC[0] >= 0 && newC[1] >= 0 && newC[0] <= 7 && newC[0] <= 7) {
                        next.push(newC);
                        visited1.add(newC);
                    }
                }
            }
        }
        count++;
        queue = next;
    }
};

testMoves([3, 3], [4, 3]);