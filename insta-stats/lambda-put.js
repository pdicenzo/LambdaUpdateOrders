'use strict';
 var AWS = require('aws-sdk'),
           mydocumentClient = new AWS.DynamoDB.DocumentClient();
// helper function
function getDate(){
    var entryid;
    return  entryid = new Date().getTime();
}

exports.handler = function(event, context, callback){
    let counterString = "Set Stats.instagram.entry"+getDate() +" = ";
      let timestamp = new Date();
    var params = { 
        Key:{
          "ID": event.id  
        },
        UpdateExpression: counterString +":e",
        ExpressionAttributeValues:{
            ":e" : {
                "followers": event.followers,
                "timestamp": timestamp.toLocaleString()
            }
        },
        ReturnValues:"UPDATED_NEW",
        TableName : process.env.PRODUCTION_TABLE
     };
     mydocumentClient.update(params, function(err, data){
         callback(err, data);
     });
};