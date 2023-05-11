const path = require('path');

const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // save => public/assets/upload
    let uploadPath = path.resolve(__dirname, "../public/assets/upload");

    // abc.png => abc-timestamp.png
    let extName = path.extname(fileObject.name);
    // get image's name (without extension)
    let baseName = path.basename(fileObject.name, extName);
    // create final path: eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
            error: null
        };
    } catch (error) {
        console.log(error);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        };
    }
};

const uploadMultipleFiles = async (fileObjects) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/assets/upload");
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < fileObjects.length; i++) {
            const element = fileObjects[i];
            // abc.png => abc-timestamp.png
            let extName = path.extname(fileObjects[i].name);
            // get image's name (without extension)
            let baseName = path.basename(fileObjects[i].name, extName);
            // create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;
            // Use the mv() method to place the file somewhere on your server
            try {
                await fileObjects[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: finalName[i].name,
                    error: null
                });
                countSuccess++;
            } catch (error) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    finalName: finalName[i].name,
                    error: JSON.stringify(error)
                });
            }
        }
        return {
            countSuccess,
            detail: resultArr
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    uploadSingleFile, uploadMultipleFiles
};