var fs = require('fs'); //this nodejs module is used to interact with file systems in node.js (to read and write to extendedusers..)

//so this file receives the new data from profile component properties, username etc
//that was sent via a HttpClient post request by the frontend.

//the aim is to update the extendedusers json file, and send confirmation back to client

module.exports = function(req, res){ //request is incoming from frontend, and res is reponse to frontend
    //this function im exporting is 
    //designed to handle HTTP requests from frontend and responses (i.e., it's a route handler). can require it in server.js

    let userobj = { //this userobj is created from values received from the req (post request from frontend)
        
        "userid": req.body.userid,
        "username": req.body.username,
        "email": req.body.email,
        "age": req.body.age,
        "birthdate": req.body.birthdate,
    }

    let uarray =[];
    //so again fs module is a nodejs module used to interact with files in nodejs
    fs.readFile('./data/extendedusers.json', 'utf-8', function(err,data){ 
        // This function(err, data) reads the extendedusers.json file. The data is read in UTF-8 encoding, 
        //and the callback function receives the data as a string. 
        //BUT THE FUNCTION IS EXECUTED AFTER FILE IS READ (ASYNCHRONOUS)
        //IF FILE IS READ SUCCESSFULLY, DATA WILL BE STORED IN data function(err,data) as string
        if(err) throw err;
        let uarray = JSON.parse(data); //the string data converted back to an object(parsed since after 
        //being read, its stored in data=> funct(err,data) as a string) and stored in the array uarray[]

        // console.log(userobj); //then the console will print the user values from frontend into terminal

        let i = uarray.findIndex(newobject => newobject.username == userobj.username); //this looks for an index of
        // a user in the new object I created called newobject and checks if its .username value matches that of 
        //userobj.username which was from the frontend and got parsed to an object
        let usernamefoundindataextended = userobj.username;
        console.log("Found the matching info for " + usernamefoundindataextended);

        if (i == -1){ //if no index is found, then the findIndex function returns a -1 ALWAYS
            //ALSO, if an existing user is NOT found by the username from frontend, 

            //then the userdata received from fronted is added into the array using .push
            uarray.push(userobj); 

            console.log("existing match not found so Just added that one");
            
        }else{ //(means that a user with that index was found, so might as well say if(i ==theindexfound ))
            //so if we find an existing user with that username, then we update it
            uarray[i] = userobj; //so we update the values of that array at that index with userobj(meaning values from frontend)
            console.log("successfully updated the new record on the file as a string");
        }
        res.send({edit: "operation complete"}); //then we tell the frontend that we've done the operation
      
        let uarrayjson = []; //we define a new array called uarrayjson to contain a string of the new record/new updates
        uarrayjson = JSON.stringify(uarray); //then we stringify the array from an object to string.

        fs.writeFile('./data/extendedusers.json', uarrayjson, 'utf-8', function(err){
            //then we again make use of fs module to write it into the file
            //again, the function above is asynchronous, meaning the error function will run after attempt to write file happens
            if(err) throw err;
        });
      })
    }

