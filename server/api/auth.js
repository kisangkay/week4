var fs = require('fs');
//now to handle user authentication and retrieving u data

module.exports = function(req, res){ //res is data
    var u = req.body.username; //here retrieves uname and pass from request body
    var p = req.body.pwd;
    var c = u + p; //makes a string from u and pass to log it below
    console.log(c);

    fs.readFile('./data/users.json', 'utf-8', function(err,data){  //now to read users.json to search matching cred
        //path abov relative to rever.js
        if(err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        let i = userArray.findIndex(user => //checks if unam and pass combi match a record
        ((user.username == u) && (user.pwd == p))
        );
        if (i == -1){
            res.send({"ok":false});
        }
        else{
            fs.readFile('./data/extendedusers.json', 'utf-8', function(err,data){ //if we find record, we read more info
            if(err) throw err;
            let extenduserArray = JSON.parse(data);

            let i = extenduserArray.findIndex(user => 
                ((user.username == u))
            );
            let userData= extenduserArray[i];
            userData["ok"] = true;
            console.log(userData);
            res.send(userData); //responds with extended userdata
        });
    }
});
}

