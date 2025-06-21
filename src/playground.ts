import { db } from "./server/db";

await db.user.create({
    data:{
        emailAddress:'test@Ga_Maamli.com',
        firstName: 'Vikram',
        lastName: 'Rohan'
    }
})
console.log('done')