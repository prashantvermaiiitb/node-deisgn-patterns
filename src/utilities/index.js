const url = require('url');
/**
 * mapping url to directory structure
 * @param {*} url 
 * @returns 
 */
function mapUrlToFileName(paegUrl) {
    const tmpUrlObject = url.parse(paegUrl, true);
    console.log("🚀 ~ file: index.js:9 ~ mapUrlToFileName ~ tmpUrlObject:", tmpUrlObject);
    let hostDirectory = tmpUrlObject.hostname.split('.').reverse().join('/');
    // console.log("🚀 ~ file: index.js:11 ~ mapUrlToFileName ~ hostDirectory:", hostDirectory);
    if(tmpUrlObject.pathname){
        hostDirectory = hostDirectory + tmpUrlObject.pathname
        // console.log("🚀 ~ file: index.js:14 ~ mapUrlToFileName ~ hostDirectory:", hostDirectory)
    }
    if(tmpUrlObject.search){
        hostDirectory = hostDirectory + tmpUrlObject.search
        // console.log("🚀 ~ file: index.js:14 ~ mapUrlToFileName ~ hostDirectory:", hostDirectory)
    }
    // return 'tmp/data/spider.v1.txt';
    // console.log("🚀 ~ file: index.js:14 ~ mapUrlToFileName ~ hostDirectory:", hostDirectory)
    const finalPath = hostDirectory.indexOf('.') !== -1 ? `tmp/data/${hostDirectory}` : `tmp/data/${hostDirectory}index.html`;
    
    console.log("🚀 ~ file: index.js:24 ~ mapUrlToFileName ~ finalPath:", finalPath);
    return `${finalPath}`;
}

exports.mapUrlToFileName = mapUrlToFileName;