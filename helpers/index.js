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
  },

  api: [
    {
      name: "GET ALL REVIEW",
      method: "GET",
      url: "https://review-backend.herokuapp.com/api/v1/review/"
    },
    {
      name: "GET REVIEW BY ID",
      method: "GET",
      url: "https://review-backend.herokuapp.com/api/v1/review/:id"
    },
    {
      name: "CREATE NEW REVIEW",
      method: "POST",
      url: "https://review-backend.herokuapp.com/api/v1/review/"
    },
    {
      name: "UPDATE REVIEW BY ID",
      method: "PATCH",
      url: "https://review-backend.herokuapp.com/api/v1/review/:id"
    },
    {
      name: "DELETE REVIEW BY ID",
      method: "DELETE",
      url: "https://review-backend.herokuapp.com/api/v1/review/:id"
    }
  ]
};
