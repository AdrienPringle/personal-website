import copydocIcon from "./project-icons/copydoc.png";
import pokecordIcon from "./project-icons/pokecord.png";
import tilegameIcon from "./project-icons/tilegame.png";
import gravityIcon from "./project-icons/gravity.png";
import threedIcon from "./project-icons/3d.png";
import guitarIcon from "./project-icons/guitar.png";
import soundboardIcon from "./project-icons/soundboard.png";

export {soundboardIcon};

export default [
    {
        title : "Soundboard Bot",
        content: "A voice activated Discord bot - ⚠️still in progress⚠️",
        src : soundboardIcon,
    },
    {
        title : "CopyDoc",
        content: "A convenient place to store clipboard templates",
        url : "/copydoc",
        src : copydocIcon,
    },
    {
        title : "Fake Pokécord",
        content: "A prank Discord bot that imitates Pokécord",
        url : "https://github.com/AdrienPringle/fake-pokecord#readme",
        src : pokecordIcon,
    },
    {
        title : "Guitar String Detector",
        content: "An ongoing attempt to detect strings from chords",
        url : "https://github.com/AdrienPringle/guitar-string-detector#readme",
        src : guitarIcon,
    },
    {
        title : "Tile Board Game",
        content: "A quick prototype of a 2 player Conway's Game of Life inspired game",
        url : "/projects/board.html",
        src : tilegameIcon,
    },
    {
        title : "Gravity Model",
        content: "A step by step simulation of multiple gravitational bodies",
        url : "/projects/gravity%20model.html",
        src : gravityIcon,
    },
    {
        title : "3D Renderer",
        content: "A rudimentary 3D renderer made without libraries",
        url : "/projects/3Drender.html",
        src : threedIcon,
    }
]