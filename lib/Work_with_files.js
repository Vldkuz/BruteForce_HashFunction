const fs = require('fs');
const Methods=require("./Methods");


function availible(Path_in,Path_sub) {
    return fs.existsSync(Path_in) && fs.existsSync(Path_sub);
} 

function start(Path_in,Path_sub,key_user,method)
{
    let data;
    let count_in;
    let str=fs.readFileSync(Path_in,'utf-8');
    let substr=fs.readFileSync(Path_sub,'utf-8');
    for (let i = 0; i < key_user.length; ++i) if (key_user[i]=='-n') count_in=key_user[i+1]

    if (method=='b')
    {
        data=Methods.BruteForce(str,substr,count_in);
        return data;
    }
    else {
        data=Methods.Hash(str,substr,method,count_in);
        return data;
    }

}

function valid_str(Path_in,Path_sub)
{
    let str=fs.readFileSync(Path_in);
    let substr=fs.readFileSync(Path_sub);
    if (str.length < substr.length && str.length==0 && substr.length==0) return false;
    return true;
}

module.exports={
    availible,
    start,
    valid_str
}
