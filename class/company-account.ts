import { DioAccount } from "./dio-account";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.getStatus() && value > 0) {
      console.log(
        "  --> Empréstimo de R$" + value.toFixed(2) + " realizado com sucesso!"
      );
      this.setBalance(value);
    } else {
      throw new Error("Conta inválida ou valor inválido!");
    }
  };

  deposit = (value: number): void => {
    if (this.getStatus() && value > 0) {
      this.setBalance(value);
      console.log(
        "  --> Depósito de R$" + value.toFixed(2) + " realizado com sucesso! "
      );
    } else {
      throw new Error("Conta inválida ou valor inválido!");
    }
  };
}
