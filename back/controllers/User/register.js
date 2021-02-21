const User = require("../../models/User")
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
module.exports=async function Register(req, res, next) {
    console.log(req.body)
    const {name,login,password,admin}=req.body;
    if(name!=null&&login!=null&&password!=null&&admin!=null){
        let hash_password ;
        crypto.scrypt(password, 'salt', 24, (err, key) => {
            if (err) throw err;
            crypto.randomFill(new Uint8Array(16), (err, iv) => {
                if (err) throw err;
                const cipher = crypto.createCipheriv(algorithm, key, iv);
                let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
                encrypted += cipher.final('hex');
                hash_password=encrypted;
                console.log(encrypted);

                const keye = crypto.scryptSync(password, 'salt', 24);
                const ive = Buffer.alloc(16, 0);
                const decipher = crypto.createDecipheriv(algorithm, keye, ive);
                let decrypted = decipher.update(hash_password, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                console.log(decrypted);
            });
        });




        console.log(name,login,password,admin);
        // let all_uers =await new User({
        //     enable:[],
        //     name,
        //     login,
        //     password:hash_password,
        //     admin
        // });
        res.json({"all_uers": 123,"error":""})

    }else{
        res.json({"error": "null"})
    }
}
