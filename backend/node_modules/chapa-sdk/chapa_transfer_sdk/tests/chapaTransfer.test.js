const ChapaTransfer = require("../src/chapaTransfer");
const dotenv = require("dotenv");

dotenv.config();
const chapa = new ChapaTransfer(process.env.CHAPA_SECRET_KEY);

describe("Chapa Transfer Tests", () => {
  it("should fetch bank list", async () => {
    const response = await chapa.bankService.getBankList();
    expect(response.status).toBe("success");
  });

  it("should initiate a transfer", async () => {
    const payload = {
      account_name: "John Doe",
      account_number: "1000123456789",
      amount: 100,
      currency: "ETB",
      reference: "TX12345678",
      bank_code: "946",
    };
    const response = await chapa.transferService.initiateTransfer(payload);
    expect(response.status).toBe("success");
  });
});
