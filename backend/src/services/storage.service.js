const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(buffer, fileName) {
    try {
        const response = await imagekit.upload({
            file: buffer, // required
            fileName: fileName, // required
            folder: '/food-delivery' // optional
        });

        return {
            url: response.url,
            fileId: response.fileId,
            name: response.name,
            thumbnailUrl: response.thumbnailUrl
        };
    } catch (error) {
        console.error("ImageKit Upload Error:", error);
        throw new Error("Failed to upload file to storage.");
    }
}

module.exports = {
    uploadFile
};
