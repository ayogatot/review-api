module.exports = {
  sendResponse: (res, statusCode, data) => {
    res.status(statusCode).json({
      status: statusCode,
      message: statusCode === 200 ? "ok" : "internal_server_error",
      data
    });
    res.end();
  },

  convertImagesBuffer: files => {
    let image = [];
    files.map(item => {
      image.push({
        originalName: item.originalname,
        size: item.size,
        b64: Buffer.from(item.buffer, "base64")
      });
    });

    return image;
  }
};
