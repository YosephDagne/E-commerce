const axios = require("axios");
const handleError = require("../utils/errorHandler");

class BankService {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.banksUrl = "https://api.chapa.co/v1/banks";
  }

  async getBankList() {
    try {
      const response = await axios.get(this.banksUrl, {
        headers: { Authorization: `Bearer ${this.secretKey}` },
      });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  }
}

module.exports = BankService;
