// const express = require('express');
// const app = express();
// app.use(express.json())

// require('./connection')


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/siranjeevi')


// const usersSchema =  new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });

// const User = mongoose.model("form", usersSchema)

// //  User = require('./Users');


// app.get('/', async(req, res) => {


//     let user = new User(req.body);
//     let result = await user.save();

//     res.send(result)
//     // console.log('listening 4000 port');
//     // res.send("<h1>Success Siranjeevi</h1>")
// })

// app.listen(4000);



const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
  }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/siranjeevi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Define the schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Route to create a new user (POST request)
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get all users (GET request)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
