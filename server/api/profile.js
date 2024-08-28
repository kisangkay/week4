var fs = require('fs');
//now to handle user authentication and retrieving u data

module.exports = function(req, res){ //res is data
    let userobj = {
        "userid": req.body.userid,
        "username": req.body.username,
        "email": req.body.email,
        "birthdate": req.body.birthdate,
    }

    let uarray =[];
    fs.readFile('./data/extendedusers.json', 'utf-8', function(err,data){ 
        if(err) throw err;
        let uarray = JSON.parse(data);
        console.log(userobj);
        let i = uarray.findIndex(arr => arr.username == userobj.username);
        if (i == -1){
            uarray.push(userobj);
        }else{
            uarray[i] = userobj;
        }
        //send response to user
        res.send({edit: "done in backend"});
        //save the file of users list
        let uarrayjson = JSON.stringify(uarray);
        fs.writeFile('./data/extendedusers.json', uarrayjson, 'utf-8', function(err){
            if(err) throw err;
        });
      })
    }

