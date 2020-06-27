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
      
/*
        db.friends.add({name: "Josephine", age: 21}).then(function() {
            return db.friends.where("age").below(25).toArray();
        }).then(function (youngFriends) {
            alert ("My young friends: " + JSON.stringify(youngFriends));
        }).catch(function (e) {
            alert ("Error: " + (e.stack || e));
        });*/