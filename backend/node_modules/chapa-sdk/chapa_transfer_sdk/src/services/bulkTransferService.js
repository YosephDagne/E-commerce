const axios = require("axios");
const handleError = require("../utils/errorHandler");

class BulkTransferService {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.bulkUrl = "https://api.chapa.co/v1/bulk-transfers";
  }

  async initiateBulkTransfer(payload) {
    try {
      const response = await axios.post(this.bulkUrl, payload, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = BulkTransferService;
