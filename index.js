class Account {

  constructor(username) {
    this.username = username;
    this.balance = 10000;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW

const myAccount = new Account('ritok');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(300.000, myAccount);
t1.commit();

const t2 = new Withdrawal(100.00, myAccount);
t2.commit();

console.log(`You have: ${myAccount.balance} CAD dollars`);
