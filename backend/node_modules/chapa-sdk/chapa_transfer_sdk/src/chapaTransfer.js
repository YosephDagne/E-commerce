const TransferService = require("./services/transferService");
const BulkTransferService = require("./services/bulkTransferService");
const BankService = require("./services/bankService");

class ChapaTransfer {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.transferService = new TransferService(secretKey);
    this.bulkTransferService = new BulkTransferService(secretKey);
    this.bankService = new BankService(secretKey);
  }
}

module.exports = ChapaTransfer;
