import React, { useEffect, useState, useRef } from "react";
import greenCoin from "./moneyEmoji.png";

export default function FallingEmoji(props) {
    const [height, setHeight] = useState(window.innerHeight + 200);
    let particles = [];
    const sizes = [70, 65, 50, 60, 55];
    const speeds = [1, 2, 4, 3];
    let pageOpen = false;
    let interval = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (document.getElementById(props.element)) {
                console.log("ok")
                pageOpen = true;
                setHeight(document.getElementById(props.element).getBoundingClientRect().bottom)
                particles = [];
                interval = setInterval(() => {
                    genCoin();
                }, 200);
                interval = setInterval(() => {
                    moveCoins()
                }, 20);
            }
        }, 800);
        return () => {
            pageOpen = false;
        }
    }, []);

    function genCoin() {
        if (document.getElementById(props.element) && pageOpen) {
            if (particles.length < 8) {
                const width = document.getElementById(props.element).getBoundingClientRect().width;
                const top = -80;
                // const left = document.getElementById(props.element).getBoundingClientRect().left;
                const size = sizes[Math.floor(Math.random() * sizes.length)];
                const left = Math.random() * width;
                const spinSpeed = ((Math.random() * 2)) * (Math.random() <= .5 ? -1 : 1);
                const spinVal = Math.random() * 360;
                const bubble = document.createElement("img");
                const speedUp = speeds[Math.floor(Math.random() * speeds.length)];
                const z = 50
                bubble.setAttribute("style", `width: ${size}px; height: ${size}px; top:${80}px;  left:${left}px; position:fixed; zIndex: ${z}`);
                bubble.setAttribute("src", greenCoin);
                if (Math.floor(Math.random() * 2) === 1) {
                    bubble.setAttribute("class", "bubble");
                }
                document.getElementById(props.element).appendChild(bubble);
                particles.push(
                    {
                        element: bubble,
                        size,
                        spinVal,
                        spinSpeed,
                        speedUp,
                        top,
                        left,
                        z
                    });
            }
        }
    }

    function moveCoins() {
        if (document.getElementById(props.element)) {
            particles.forEach((p) => {
                // update propeties
                p.top = p.top + p.speedUp;
                p.spinVal = p.spinVal + p.spinSpeed;

                // check if particle has gone off screen
                if (p.top >= height + p.size) {
                    particles = particles.filter((o) => o !== p);
                    p.element.remove();
                }
                // enter properties
                // transition: position 0.3s;
                p.element.setAttribute("style", `
                position: fixed;
                top: ${p.top}px;
                left: ${p.left}px;
                width: ${p.size}px;
                heigth: ${p.size}px;
                transform:rotate(${p.spinVal}deg);
                zIndex: ${p.z}
            `);
            });
        } else {
            particles = [];
        }
    }

    return (
        <div>
        </div>
    );
}