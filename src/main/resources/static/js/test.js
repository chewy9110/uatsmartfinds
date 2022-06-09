// this file should contain test data only
// it should be removed once interface to the backend is available

class UserTable {
    constructor () {
        this.allUsers = [];
    }

    addUser(uid, udisplayName, email, pw) {
        const user = {
            userID : uid,
            displayName : udisplayName,
            email : email,
            pw : pw
        }

        this.allUsers.push(user);
        // console.log(this.allUser);
    }

    findUser(email, pw) {
        // find user in this.allUsers
        for (let i=0; i<this.allUsers.length; i++) {
            if (email == this.allUsers[i].email && pw == this.allUsers[i].pw) {
                //console.log(this.allUsers[i]);
                return { userID : this.allUsers[i].userID, displayName : this.allUsers[i].displayName, email: this.allUsers[i].email};            
            }
        }
        return null;
    }

    sortUserByEmail() {
        this.allUsers.sort( function(a, b) {
            let keyA = a.email, keyB = b.email;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
    }
}

const userList = new UserTable();
userList.addUser(100, "Cheong Yuen Thye", "yuenthye@sf.com", "nimda1234");
userList.addUser(101, "Desmond Chia", "desmond@sf.com", "nimda1234");
userList.addUser(102, "Andrew Sim", "andrew@sf.com", "nimda1234");
userList.addUser(103, "Chew Kim Beng", "kimbeng@sf.com", "nimda1234");
userList.addUser(104, "Buyer1", "buy1@somewhere.com", "1234");
userList.addUser(105, "Seller1", "sell1@somewhere.com", "1234");
console.log(userList);

userList.sortUserByEmail(); // sorts list by email address
