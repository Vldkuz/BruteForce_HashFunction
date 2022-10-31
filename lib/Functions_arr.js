function equal_in_arr(arr,temp)
{
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i]==temp)
        {
            return true;
        }
    }
    return false;
}

module.exports={
    equal_in_arr
}