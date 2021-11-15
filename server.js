
// שם הספר , שם הסופר , שנת הוצאה , שפת הספר (2 אותיות בלבד) , ודירוג מ0 עד 5 (אפשר ליצור רנדומלי).
// יש לבצע בדיקות שאכן המידע תקין (למשל לא נכנס שם כלשהו ריק) או ששנת ההוצאה גדולה מהשנה הנוכחית וכו.
// על התוכנה יש להכיל את הדברים הבאים :
// הכנסת ספר חדש למאגר , קבלת כל הספרים מהמהאגר , קבלת כל הספרים מהמאגר על פי שנה(נתון שנתקבל ב url param).
// עדכון ספר , מחיקת ספר.
require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());


app.use('/api/books', require('./routes/books.route'));


mongoose.connect(`mongodb+srv://${process.env.DB_URL}/myBooks?retryWrites=true&w=majority`,{ useNewUrlParser: true })

// mongodb+srv://shadi:<password>@cluster0.ksjui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.listen( process.env.PORT ||5001,  ()=>{
    console.log('we are on server 5001');
})
