let arr1=[1,2,3,4];
let arr2=[3,2,1,4];

let arr3=[...arr1,...arr2];
console.log(arr3);

class account{

    constructor(balance){
       this.balance=balance;
    }

    deposite(amount){
         this.balance += amount;
         console.log(this.balance);
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            console.log(this.balance);
        }
        else{
            console.log(`insufficient funds`);
        }
    }
    getBalance(){
        console.log(`ur current balnce is ${this.balance}`);
    }
}

let user1=new account(5000);

user1.deposite(2000);
user1.withdraw(3000);
user1.getBalance();


// console.log(user1.deposite(2000));