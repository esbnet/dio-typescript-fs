import { DioAccount } from "./dio-account";

export class SalaryAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.getStatus() && value > 0) {
      this.setBalance(value + 10);
      console.log(
        "  --> Depósito de R$" + value.toFixed(2) + " realizado com sucesso! "
      );
    } else {
      throw new Error("Conta inválida ou valor inválido!");
    }
  };
}
