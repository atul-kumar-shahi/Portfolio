// utils/gameData.ts
import flappyBirdAnim from "../../public/flappy.json";
import packman from "../../public/packman.json";
import hextrix from "../../public/hextrix.json";

export const gameData = [
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    lottie: flappyBirdAnim,
    github: "https://github.com/your/flappybird",
    playUrl: "https://flappy-bird-game.vercel.app/",
    credit: "Original by Neal.fun, cloned by you",
  },
  {
    id: "pacman",
    title: "Pac-Man",
    lottie: packman,
    github: "https://github.com/masonicGIT/pacman",
    playUrl: "https://masonicgit.github.io/pacman/",
    credit: "Masonic - HTML5 Pac-Man",
  },
  {
    id: "hextris",
    title: "Hextris",
    lottie: hextrix,
    github: "https://github.com/Hextris/hextris",
    playUrl: "https://hextris.io/",
    credit: "Hextris Team - Addictive Hexagonal Puzzle",
  },
  
  {
    id: "minesweeper",
    title: "Minesweeper",
    image: "/minesweeper.png",
    github: "https://github.com/ziebelje/minesweeper",
    playUrl: "https://ziebelje.github.io/minesweeper/",
    credit: "Josh Ziebell - JavaScript Minesweeper",
  },
  {
    id: "snake",
    title: "Snake Game",
    image: "/snake.png",
    github: "https://github.com/patorjk/JavaScript-Snake",
    playUrl: "https://patorjk.com/games/snake/",
    credit: "Patrick Gillespie - JavaScript Snake",
  },

  {
    id: "2048-cupcakes",
    title: "2048 Cupcakes",
    image: "/2048-cupcakes.png",
    github: "https://github.com/0x0800/2048-CUPCAKES",
    playUrl: "https://0x0800.github.io/2048-CUPCAKES/",
    credit: "0x0800 - 2048 Cupcakes Edition",
  },
  {
    id: "asteroids",
    title: "Asteroids",
    image: "/asteroids.png",
    github: "https://github.com/dmcinnes/HTML5-Asteroids",
    playUrl: "https://www.kevs3d.co.uk/dev/asteroids/",
    credit: "Kevin Roast - HTML5 Asteroids",
  },
  {
    id: "connect-four",
    title: "Connect Four",
    image: "/connect-four.png",
    github: "https://github.com/kenrick95/c4",
    playUrl: "https://kenrick95.github.io/c4/",
    credit: "Kenrick95 - Connect Four Game",
  },
  {
    id: "breakout",
    title: "Breakout",
    image: "/breakout.png",
    github: "https://github.com/end3r/Gamedev-Canvas-workshop",
    playUrl: "https://end3r.github.io/Gamedev-Canvas-workshop/lesson10.html",
    credit: "Andrzej Mazur - MDN Gamedev Tutorial",
  },
];