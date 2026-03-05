let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

let d=new Date()

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(`BALANCE OF ${customer.name} is ${customer.balance}`);
}

function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: d.toDateString(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}

function withdraw(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
        if(amount>customer.balance){
        console.log(`Insufficient balance in ${customer.name} account.`)
        return customer
    }
      return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: d.toDateString(),
          },
        ],
      };
    } 

    else {
      return customer;
    }
  });
}

function showTransactions(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log('TRANSACTIONS OF '+customer.name+" is")
  console.log(customer.transactions)
}

export {checkBalance,deposit,withdraw,showTransactions}