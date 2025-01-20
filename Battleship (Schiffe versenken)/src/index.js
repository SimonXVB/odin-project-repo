import "./styles.css";

class Ship {
    constructor (name, length, marking){
        this.name = name;
        this.length = length;
        this.marking = marking;

        this.sunk = false;
        this.placed = false;
    };
};

class Game {
    constructor() {
        this.board =   [[0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]];
        
        this.carrier1 = new Ship("Carrier", 5, "C1");
        
        this.battleship1 = new Ship("Battleship", 4, "B1");
        
        this.destroyer1 = new Ship("Destroyer", 3, "D1");
        
        this.submarine1 = new Ship("Submarine", 3, "S1");
        
        this.patrol_boat1 = new Ship("Patrol Boat", 2, "P1");
        
        this.currentShip = this.carrier1;
        this.missed = 0;
        this.totalSunk = 0;
        this.totalPlaced = 0;
        this.direction = "vertical";
        this.winner = false;
        this.log = "";
    };

    placeVer(ship, hor, ver) {
        if(ship.placed === true) {
            this.log = "Ship already placed";
            return;
        }
        
        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i] === undefined) {
                this.log = "Out of Bounds ver";
                return
            }
        }

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i][hor] !== 0){
                this.log = "Not possible ver";
                return
            } else {
                this.board[ver + i][hor] = ship.marking;
            }
        }

        ship.placed = true;
        this.totalPlaced++;
    };

    placeHor(ship, hor, ver) {
        if(ship.placed === true) {
            this.log = "Ship already placed";
            return;
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] === undefined) {
                this.log = "Out of Bounds hor";
                return
            }
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] !== 0) {
                this.log = "Not possible hor";
                return
            } else {
                this.board[ver][hor + i] = ship.marking;
            }
        };

        ship.placed = true;
        this.totalPlaced++;
    };

    hit(hor, ver) {
        if(this.board[ver][hor] !== 0) {
            switch(this.board[ver][hor]) {
                case "C1":
                    this.carrier1.length--;
                    this.log = "Carrier has been hit";
                    break;
                    //
                case "B1":
                    this.battleship1.length--;
                    this.log = "Battleship has been hit";
                    break;
                    //
                case "D1":
                    this.destroyer1.length--;
                    this.log = "Destroyer has been hit";
                    break;
                    //
                case "S1":
                    this.submarine1.length--
                    this.log = "Submarine has been hit";
                    break;
                    //
                case "P1":
                    this.patrol_boat1.length--;
                    this.log = "Patrol Boat has been hit";
                    break;
            }
        } else {
            this.log = "Miss";
            this.missed++;
        }
        this.board[ver][hor] = "H";

        this.checkSunk();
        this.checkWin();
    };

    checkSunk() {
        for(const entry in this) {
            if(this[entry].name){
                if(this[entry].sunk !== true) {
                    if(this[entry].length === 0) {
                        this.totalSunk++;
                        this[entry].sunk = true;
                        this.log = `${this[entry].name} has been sunk!`;
                    }
                }
            }
        }
    };

    checkWin() {
        if(this.totalSunk === 5) {
            this.winner = true;
            return
        }
    };

    setSunk() {
        this.totalSunk = 5;
    };

    setPlaced() {
        for(const entry in this) {
            if(this[entry].name) {
                this[entry].placed = true;
            }
        }
    }

    pick(ship)   {
        this.currentShip = ship;
        console.log(this.currentShip);
    };
};

class CreatePlayer {
    constructor(pName, pMark) {
            this.pName = pName;
            this.pMark = pMark;
            this.pBoard = new Game();
            this.ready = false;
    };
};

class Play {
    constructor (p1Name, p2Name) {
        this.p1 = new CreatePlayer(p1Name, "P1");
        this.p2 = new CreatePlayer(p2Name, "P2");
        this.current = this.p1;
        this.curr;
        this.attacker;
    }

    checkReady() {
        if(this.current.pBoard.totalPlaced === 5) {
            this.current.ready = true;
        }
    };

    switch() {
        this.checkReady();

        if(this.current.pMark === "P1") {
            this.attacker = this.p1.pName;
            this.curr = this.p2.pName;
        } else {
            this.attacker = this.p2.pName;
            this.curr = this.p1.pName;
        }

        if(this.p1.ready === true) {
            this.current === this.p1 ? this.current = this.p2 : this.current = this.p1;
        }
    };

    changePlayer() {
        this.checkReady();

        if(this.p1.ready === true) {
            this.current = this.p2;
        }
    }
};

export { Ship, Game, CreatePlayer, Play };