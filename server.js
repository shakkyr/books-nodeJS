
// שם הספר , שם הסופר , שנת הוצאה , שפת הספר (2 אותיות בלבד) , ודירוג מ0 עד 5 (אפשר ליצור רנדומלי).
// יש לבצע בדיקות שאכן המידע תקין (למשל לא נכנס שם כלשהו ריק) או ששנת ההוצאה גדולה מהשנה הנוכחית וכו.
// על התוכנה יש להכיל את הדברים הבאים :
// הכנסת ספר חדש למאגר , קבלת כל הספרים מהמהאגר , קבלת כל הספרים מהמאגר על פי שנה(נתון שנתקבל ב url param).
// עדכון ספר , מחיקת ספר.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());


app.use('/api/books', require('./routes/books.route'));


mongoose.connect('mongodb+srv://shadi:shakky17@cluster0.ksjui.mongodb.net/myBooks?retryWrites=true&w=majority',{ useNewUrlParser: true })

// mongodb+srv://shadi:<password>@cluster0.ksjui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.listen(5001 || process.env.PORT ,  ()=>{
    console.log('we are on server 5001');
})
