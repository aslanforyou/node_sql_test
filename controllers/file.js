const fs = require('fs');
const folderPath = __dirname + '/../fileDir';
const filePath = folderPath + '/file.txt';

const getFileData = async (req, res) => {
    if (!fs.existsSync(filePath)) {
        return res.send('No file');
    }

    const searchText = req.query.text;
    const fileData = await fs.promises.readFile(filePath);
    const linesArr = fileData.toString().split('\r\n');

    if (!searchText) {
        return res.send(fileData.toString());
    }

    const result = linesArr.filter(arr => arr.includes(searchText));

    return res.send(result.join('\r\n'));
}

const writeFile = async (req, res) => {
    try {
        let data = req.body;

        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }

        const fileData = await fs.promises.readFile(filePath);
        const stream = fs.createWriteStream(filePath, {flags: 'a'});
        stream.write(fileData + data.toString() + '\r\n');
        stream.end();

        return res.send(data);
    } catch (err) {
        return res.status(500).send(err);
    }
}

const createFile = async (req, res, next) => {
    if (fs.existsSync(filePath)) {
        next();
    }

    try {
        await fs.promises.mkdir(folderPath, {recursive: true});
        await fs.promises.writeFile(filePath, '');

        next();
    } catch (err) {
        return res.status(500).send(err);
    }
}

module.exports = {
    getFileData,
    writeFile,
    createFile
}