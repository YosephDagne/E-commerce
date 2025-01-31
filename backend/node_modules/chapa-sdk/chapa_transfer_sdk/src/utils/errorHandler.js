const handleError = (error) => {
  if (error.response) {
    return {
      status: "failed",
      message: error.response.data.message || "An error occurred",
      data: null,
    };
  } else if (error.request) {
    return {
      status: "failed",
      message: "No response from server",
      data: null,
    };
  } else {
    return {
      status: "failed",
      message: error.message,
      data: null,
    };
  }
};

module.exports = handleError;
