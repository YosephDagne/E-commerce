const axios = require("axios");
const handleError = require("../utils/errorHandler");

class TransferService {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.baseUrl = "https://api.chapa.co/v1/transfers";
  }

  async initiateTransfer(payload) {
    try {
      const response = await axios.post(this.baseUrl, payload, {
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

  async verifyTransfer(tx_ref) {
    try {
      const response = await axios.get(`${this.baseUrl}/verify/${tx_ref}`, {
        headers: { Authorization: `Bearer ${this.secretKey}` },
      });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async getAllTransfers(page = 1, per_page = 10) {
    try {
      const response = await axios.get(
        `${this.baseUrl}?page=${page}&per_page=${per_page}`,
        {
          headers: { Authorization: `Bearer ${this.secretKey}` },
        }
      );
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = TransferService;
