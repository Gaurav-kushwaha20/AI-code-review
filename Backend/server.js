require('dotenv').config()
const app = require('./src/app')


app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
})