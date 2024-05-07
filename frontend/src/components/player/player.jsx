import '../../styles/entity.css';
import {useEffect, useState, react} from 'react';

function Player() {

    const player = document.getElementById('player');
    let xPos = 100;
    let yPos = 600;

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
    
        return function () {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleKeyPress = (e) => {
        let key = e.key;

        switch(key) {
            case 'w':
                yPos = yPos - 5;
                player.style.top = yPos + "px";
                break;
            case 'a':
                xPos = xPos - 5;
                player.style.left = xPos + "px";
                break;
            case 's':
                yPos = yPos + 5;
                player.style.top = yPos + "px";
                break;
            case 'd':
                xPos = xPos + 5;
                player.style.left = xPos + "px";
                break;
        }
    }

    return (
        <div id = 'player' className="square"></div>
    )
}

export default Player;