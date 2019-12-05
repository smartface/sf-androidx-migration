#!/usr/bin/env node --max_old_space_size=2048
const fs = require("fs");
const findInFiles = require("find-in-files");
const replaceInFile = require('replace-in-file');
const readLine = require('readline');
const path = require("path");

const projectDir = process.argv[2];
const packageNameStructs = ["android.support", "android.databinding", "android.arch"];
function getClasses(inputFile) {
    return new Promise((resolve, reject) => {
        const classObj = new Object();
        const paths = path.resolve(__dirname, inputFile);
        const inputReadableStream = fs.createReadStream(paths);
        const lineReader = readLine.createInterface({ input: inputReadableStream });

        lineReader.on('line', function (line) {
            let lineSplits = line.split(",");
            let androidSupportPackN = lineSplits[0];
            let androidXPackN = lineSplits[1];
            classObj[androidSupportPackN] = androidXPackN;
        });

        lineReader.on('close', function () {
            resolve(classObj);
        });
    });
}

function migrateAndroidX20(dirPath) {
    getClasses('classes.txt').then((classObj) => {
        console.log("Please wait this may take a few minutes...");
        findInFiles.find(packageNameStructs.join("|"), dirPath, '.js$|.xml$')
            .then((results) => {
                let classesKey = Object.keys(classObj);
                for (let i = 0, p = Promise.resolve(); i < classesKey.length; i++) {
                    p = p.then(_ => new Promise((resolve, reject) => {
                        const androidSupportPackN = classesKey[i];
                        const androidXPackN = classObj[classesKey[i]];

                        const filesPath = Object.keys(results);
                        const options = {
                            files: filesPath,
                            from: androidSupportPackN,
                            to: androidXPackN
                        };
                        replaceInFile(options).then(results => {
                            results.forEach(result => {
                                console.log(result + " --------------------> migrated to androidx");
                            });
                            resolve();
                        }).catch(_ => resolve());
                    }));
                }
            });
    });
}
migrateAndroidX20(projectDir);