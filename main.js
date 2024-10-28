import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { imageSequence } from './sequence.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.querySelector('#app').innerHTML = `
<canvas id="image-sequence" width="1158" height="770" ></canvas>
  <div class="vite_holder">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
let frameCount = 147,
urls = new Array(frameCount).fill().map((o, i) => `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(i+1).toString().padStart(4, '0')}.jpg`);
console.log(urls)
gsap.registerPlugin(ScrollTrigger);

setupCounter(document.querySelector('#counter'))

imageSequence({
  urls, // Array of image URLs
  canvas: document.querySelector('#image-sequence'), // <canvas> object to draw images to
  //clear: true, // only necessary if your images contain transparency
  // onUpdate: (index, image) => console.log("drew image index", index, ", image:", image),
  scrollTrigger: {
    start: 0,   // start at the very top
    end: "max", // entire page
    scrub: true, // important!
  }
});
