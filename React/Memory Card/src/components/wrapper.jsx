import { Card } from "./card";
import { useState } from "react";

export function Wrapper() {
    const [clicked, setClicked] = useState(false);
    const [addArray, setAddArray] = useState([]);
    const [currScore, setCurrScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [color, setColor] = useState("white");
 
    const pokemon = [
        { name: "bulbasaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
        { name: "pidgey", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
        { name: "squirtle", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
        { name: "charmander", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
        { name: "rattata", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
        { name: "pikachu", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
        { name: "clefairy", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" },
        { name: "zubat", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" },
        { name: "diglett", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png" },
        { name: "jigglypuff", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" }
    ];

    let randomArr = [];
    let numArr = [];

    function getIndex() {
        let num = Math.floor(Math.random() * 10);
    
        if(numArr.length >= 10) {
            return
        }
        
        if(!(numArr.includes(num))) {
            numArr.push(num);
            randomArr.push(pokemon[num]);
        }
    
        getIndex();
    };
    getIndex();

    function score(target) {
        if(addArray.includes(target)){
            setCurrScore(0);
            setAddArray([]);
            setColor("#ffa59e");

            setTimeout(() => {
                setColor("white");
            }, 450);

            console.log("lose");

            if(currScore > highScore) {
                setHighScore(currScore);
            }
            return
        } else {
            setAddArray([...addArray, target]);
            setCurrScore(currScore + 1);
        }
    };

    function handleClick(e) {
        numArr = [];
        randomArr = [];

        getIndex();
        score(e.target.innerText);

        setClicked(clicked === true ? false : true);
    };

    return (
        <div style={{backgroundColor: color, height: "95vh"}}>
            <span className="scoreCard">Current Score: {currScore} High Score: {highScore}</span>
            <div className="wrapperWrapper">
                <div className="wrapper">
                    {randomArr.map(poke => <Card name={poke.name} img={poke.img} handle={handleClick} key={poke.name} /> )}
                </div>
            </div>
        </div>
    );
};