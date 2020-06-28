//Declare Database
//Database includes User, Account, and Transfer schemes
//User has id, username, password attributes
//Account has id, account name, amount, currency, interest ratio, timestamp, and username attributes
//Transfer has id, receiver account name, sender account name, date, amount, currency, description, username, 
//sentiment(negative or positive) attributes

var db = new Dexie("BankDatabase");
db.version(1).stores({
    users: "++id,username,password",
    accounts: "++id,accountName,amount,currency,interestRatio,timeStamp,username",
    transfers: "++id,receiverAccountName,senderAccountName,date,amount,currency,description,username,sentiment"
});

function addUser(username, password){
    db.users.add({username: username, password: password}).then(function() {
        console.log("User added to the users table.");
    });
}

function addAccounts(accountName, amount, currency, interestRatio, timeStamp, username){
    db.accounts.add({accountName: accountName, amount: amount, currency: currency, 
                    interestRatio: interestRatio, timeStamp: timeStamp, username: username}).then(function(){
                        console.log("Account added to the accounts table.");
                    });
}

function addTransfers(receiverAccountName, senderAccountName, date, amount, currency, description, username, sentiment){
    db.transfers.add({receiverAccountName: receiverAccountName, senderAccountName: senderAccountName, date: date, 
                    amount: amount, currency: currency, description: description, username: username, sentiment: sentiment}).then(function(){
                        console.log("Transfer added to the transfers table.");
                    });
}

function checkUser(username){
    flag = true;
    db.users.where("username").equals(username).count(function (count) {
        if(count = 0){
            alert('Error!');
            console.log("User is not in the database!");
            flag = false;
        }
        else{
            flag = true;
        }
    });
    return flag;
}

function checkPassword(username, password) {
    flag = true;
    db.users.where("username").equals(username).each (function (user) {
        if(password==user.password){
            flag = true;
        }
        else{
            alert('Error!');
            console.log("User's password is not matching!");
            flag = false;
        }
    });
    return flag;
}

function deleteDatabase(){
    db.delete().then(() => {
        console.log("Database successfully deleted");
    }).catch((err) => {
        console.error("Could not delete database");
    }).finally(() => {
        // Do what should be done next...
    });
}
      
/*
        db.friends.add({name: "Josephine", age: 21}).then(function() {
            return db.friends.where("age").below(25).toArray();
        }).then(function (youngFriends) {
            alert ("My young friends: " + JSON.stringify(youngFriends));
        }).catch(function (e) {
            alert ("Error: " + (e.stack || e));
        });*/