import { CompanyAccount } from "./class/company-account";
import { PeopleAccount } from "./class/people-account";
import { SalaryAccount } from "./class/salary-account";

console.clear();
// Conta Pessoal
const peopleAccount: PeopleAccount = new PeopleAccount(
  123,
  "Conta Corrente Pessoal",
  321654
);

console.log(
  "\n*** " + peopleAccount.getName() + " *************************************"
);
peopleAccount.getBalance().toFixed(2);

// Depósito
console.log("\n::: Depósito");
peopleAccount.deposit(100);
peopleAccount.getBalance().toFixed(2);
peopleAccount.deposit(25.7);
peopleAccount.getBalance().toFixed(2);

// Saque
console.log("\n::: Saque");
peopleAccount.withdraw(30);
peopleAccount.getBalance().toFixed(2);

// Conta Emprestimo
const companyAccount: CompanyAccount = new CompanyAccount(
  "Conta Corrente Empresarial",
  123
);
console.log(
  "\n*** " + companyAccount.getName() + " *************************************"
);
companyAccount.getBalance().toFixed(2);

console.log("\n::: Depósito");
companyAccount.deposit(350);
peopleAccount.getBalance().toFixed(2);
console.log("\n::: Empréstimo");
companyAccount.getLoan(1000);
peopleAccount.getBalance().toFixed(2);

// Conta Salário
const salaryAccount: SalaryAccount = new SalaryAccount(
  "Conta Corrente Salário",
  123
);
console.log(
  "\n*** " + salaryAccount.getName() + " *************************************"
);
salaryAccount.getBalance().toFixed(2);

console.log("\n::: Depósito");
salaryAccount.deposit(350);
salaryAccount.getBalance().toFixed(2);
