import {checkBalance,deposit,withdraw,showTransactions} from './bank.js'


deposit(1, 1500);
checkBalance(1)
showTransactions(1)
deposit(2, 1000);
withdraw(2,580)
checkBalance(2)
showTransactions(2)