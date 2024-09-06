//md5
// const md5 = require('md5')

// var password = 'kesha@23'

// console.log('Normal Password:',password)
// console.log('Hashed Password:',md5(password))





//bcrypt
const bcrypt =require('bcrypt');

// var password = 'kesha@23'

async function hashPassword(password){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        console.log('Normal Password:',password)
        console.log('Hashed Password:',hashPassword)

    }
    catch(err){
        console.error('Error',err);
    }
}

hashPassword('Kesha@23')