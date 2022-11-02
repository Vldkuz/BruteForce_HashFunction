function get_hash_funct(substr,method)
{
    hash_res=0;
    if (method=='h1') 
    { 
        for (let i = 0; i < substr.length; ++i) 
        {
            hash_res+=substr[i].charCodeAt(0);   
        }
    }

    else if (method=='h2')
    {
        for (let i = 0; i < substr.length; ++i) 
        {
            hash_res+=(substr[i].charCodeAt(0))**2;   
        }
    }

    else if (method=='h3')
    {
        for (let i = 0; i < substr.length; ++i) 
        {
            hash_res+=(substr[i].charCodeAt(0))*2**(substr.length-1-i);   
        }
    }

    return hash_res;
}

function get_temp_hash(hash_temp,first_char,last_char,method,substr_len_key_2)
{
    if (method=='h1') 
    { 
        hash_temp=hash_temp-(first_char).charCodeAt(0)+(last_char).charCodeAt(0);
    }

    else if (method=='h2')
    {
        hash_temp=hash_temp-(first_char).charCodeAt(0)**2+(last_char).charCodeAt(0)**2;
    }

    else if (method=='h3')
    {
        hash_temp=(hash_temp-first_char.charCodeAt(0)*2**(substr_len_key_2 - 1))*2+last_char.charCodeAt(0);
    }

    return hash_temp;
}

module.exports={
    get_hash_funct,
    get_temp_hash
}