const Access_file=require("./lib/Work_with_files");
const funct_arr=require("./lib/Functions_arr");

let keys=['-c','-n','-t'];
let methods=['b','h1','h2','h3'];
let [key_user,method,Path]=[[],,[]];
let bflag=1;
let res;


for (let i = 2; i < process.argv.length; ++i)
{
    if (funct_arr.equal_in_arr(keys,process.argv[i]))
    {
        
        if (process.argv[i]==keys[1]) {
            key_user.push(process.argv[i],process.argv[i+1]);
        }

        else
        {
            key_user.push(process.argv[i]);
        }
    }
    if (funct_arr.equal_in_arr(methods,process.argv[i])) method=process.argv[i];
    if (process.argv[i].endsWith(".txt")) Path.push(process.argv[i]);
}

if (method==undefined){
    console.log("Ошибка в выборе метода");
    return ;
}
if (!Access_file.availible(Path[0],Path[1])){
    console.log("Ошибка в доступе к файлу/aм");
     return ;
    }

if (Access_file.valid_str(Path[0],Path[1])) {
    res=Access_file.start(Path[0],Path[1],key_user,method);
}
else
{
    console.log("Подстрока больше строки");
    return;
}

if (method=='b')
{
    for (let i = 0; i < key_user.length; ++i){
        if (key_user[i]=='-n') {console.log(`Число первых ${key_user[i+1]} вхождений ${res[0]}`),bflag=0};
        if (key_user[i]=='-t') console.log(`Время работы программы: ${res[1]}`);
    }
}
else
{
    for (let i = 0; i < key_user.length; ++i){
        if (key_user[i]=='-n') {console.log(`Число первых ${key_user[i+1]} вхождений ${res[0]}`),bflag=0};
        if (key_user[i]=='-t') console.log(`Время работы программы: ${res[2]}`);
        if (key_user[i]=='-c') console.log(`Число коллизий : ${res[1]} `);
    }
}

if (bflag) console.log(res[0]);