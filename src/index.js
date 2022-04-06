import { kml } from "@tmcw/togeojson";
import './style.css'
import progressBar from './progress.gif'

const myGif = new Image()
myGif.src = progressBar

document.body.appendChild(myGif)
const worker = new Worker(new URL('worker.js',"http://localhost:9000/"))


worker.onmessage = ({ data: { answer } }) => {
  console.log('main thread',answer);
};

fetch('http://localhost:9000/scovano_construction.kml')
.then(data => data.text())
.then(xml => {
    worker.postMessage({
      data:
        xml
    });
  }
)
