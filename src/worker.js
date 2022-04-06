
import { kml } from "@tmcw/togeojson";
import { DOMParser } from '@xmldom/xmldom'
self.onmessage = ({data:data}) => {
  console.log('worker.js')
  let xml = data.data
  const dom = new DOMParser().parseFromString(xml, "text/xml")
  // console.log(dom)
  const json = kml(new DOMParser().parseFromString(xml, "text/xml"));
  console.log('background thread',json)
  self.postMessage({
    answer: json,
  });
};
