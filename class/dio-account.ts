export abstract class DioAccount {
  private name: string;
  private accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  deposit = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      this.balance += value;
      console.log(
        "\n  --> Depósito de R$" + value.toFixed(2) + " realizado com sucesso!"
      );
    } else {
      throw new Error("É preciso informar um valor maior que 0!");
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(
        "\n  --> Saque de R$" + value.toFixed(2) + " realizado com sucesso!"
      );
    } else {
      throw new Error("Saldo insuficiente!");
    }
  };

  getBalance = (): number => {
    console.log("  Saldo : R$ " + this.balance.toFixed(2));
    return this.balance > 0 ? this.balance : 0;
  };

  setBalance = (value: number): number => {
    return (this.balance += value);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Sua conta esta fechada");
  };

  getStatus = (): boolean => {
    return this.status;
  };
}
