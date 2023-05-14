const fs = require('fs');
// const { request } = require('http');
const request = require('request');
const { mkdirp } = require('mkdirp');
const utilities = require('../../utilities');
const path = require('path');
/**
 * Will recieve an Url & scallback, try to download the content 
 * and save that in a file.
 * @param {*} url 
 * @param {*} callback 
 */
function spider(url, callback) {
    const fileName = utilities.mapUrlToFileName(url);
    fs.exists(fileName, function (exists) {
        if (!exists) {
            console.log('Downloading ' + url);
            request(url, function (err, response, body) {
                if (err) {
                    callback(err);
                } else {
                    const made = mkdirp.sync(path.dirname(fileName));
                    console.log("🚀 ~ file: index.js:23 ~ made:", made, path.dirname(fileName))
                    if (made) {
                        console.log(`made directories, starting with ${made}`)
                        fs.writeFile(fileName, body, function (err) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, fileName, true);
                            }
                        })
                    } else {
                        callback(null, fileName, false);
                    }
                    // mkdirp(path.dirname(fileName)).then(function (err) {
                    //     if (err) {
                    //         callback(err);
                    //     } else {

                    //     }
                    // });
                }
            });
        } else {
            callback(null, fileName, false);
        }
    })
}

spider(process.argv[2], function (err, fileName, downloading) {
    if (err) {
        console.log(err);
    } else if (downloading) {
        console.log('Completed the downloading of ' + fileName + '.');
    } else {
        console.log(`${fileName} was already downloaded.`);
    }
});