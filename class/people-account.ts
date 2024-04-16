import { DioAccount } from "./dio-account";

export class PeopleAccount extends DioAccount {
  private docId: number;

  constructor(docId: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.docId = docId;
  }
}
