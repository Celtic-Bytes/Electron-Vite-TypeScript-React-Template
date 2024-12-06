// This script is to delete automatically the dist folders

const fs = require("fs");
const path = require("path");

const deleteFolderRecursive = function (directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
};

["dist", "dist-electron", "dist-react"].forEach((dir) => {
    deleteFolderRecursive(path.join(__dirname, dir));
});
