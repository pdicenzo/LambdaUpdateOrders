let insta = pm.response.json();
let handle = pm.variables.get("handle");
let espn_key = pm.variables.get("espn_key");
let count = insta.graphql.user.edge_followed_by.count;

console.log('=====');
console.log(handle);
console.log(count);
console.log('=====');

main();

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}
function main(){
    if (isEmpty(insta)){
    }
    else{
        parseData()
    }
}
function parseData(){
    pm.sendRequest({
    url: 'https://3n43c09k3f.execute-api.us-east-2.amazonaws.com/Schema2/v1/athletes/'+espn_key,
    method: 'PUT',
    header: 'headername1:value1',
    body: {
        mode: 'raw',
        raw: JSON.stringify({
                    "id": espn_key.toString(),
                    "handle": handle,
                    "followers": insta.graphql.user.edge_followed_by.count
            })
    }
}, function (err, res) {
    console.log(res);
});
   
}