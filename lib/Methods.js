const hash_op=require("./Hash_Optimization");

function BruteForce(str,substr,count_in)
{
    let index_in=new Array();
    if (index_in.length==count_in) return index_in;

    for (let i = 0; i < str.length; ++i) {
        let [bflag,temp_k]=[1,i];
        for(let j=0; j < substr.length; ++j)
        {
            if (str[temp_k++]!=substr[j]) {
                bflag=0;
                break;
            }
        }
        if (bflag) index_in.push(i);
        if (index_in.length==count_in) break;
    }
    return index_in;
}

function Hash(str,substr,method,count_in)
{
    let index_in=new Array();
    let hash_substr=hash_op.get_hash_funct(substr,method);
    let temp_s=hash_op.get_hash_funct(str.slice(0,substr.length),method);
    let collision=0;
    if (index_in.length==count_in) return [index_in,collision];

    for (let i = 0; i+substr.length < str.length; ++i) {
        if (hash_substr==temp_s) {
            let [bflag,temp_k]=[1,i];
            for(let j=0; j < substr.length; ++j)
            {
                if (str[temp_k++]!=substr[j]) {
                    bflag=0;
                    break;
                }
            }
            if (bflag) {
                index_in.push(i);
            }
            else {
                ++collision;
            }

            if (index_in.length==count_in) break;
        }
        temp_s=hash_op.get_temp_hash(temp_s,str[i],str[i+substr.length],method,substr.length);
    }

    return [index_in,collision];
}

module.exports={
    BruteForce,
    Hash
};