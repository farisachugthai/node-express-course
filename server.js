const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const mockUserData = [
  {name: 'Mark'},
  {name: 'Jill'},
]

app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

/* In Express URLs, words with a colon in front of them are treated as vars.
 * You can access the value of each variable through req.params
 * Note: Running this file and going to localhost:8000 won't work
 * Go to localhost:8000/users/whatever-name-you-want
 * Then open up the console and see if something logged. For example
 * `yarn start`
 * and then directing a browser to
 * http:localhost:8000/users/mark
 * will display mark
 */
app.get('/users/:id', function (req, res) {
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got 1 user. Nice!',
    user: req.params.id
  })
})

app.listen(8000, function () {
  console.log("server is running")
})

/*
 * So far, we have only made GET requests to our server. A POST request can
 * send data securely through the request body. In order to make POST
 * requests, first we need to include the "body-parser" library from our
 * node_modules (included with express). Add these lines after the app
 * variable:
 */
app.use(bodyParser.json());

// Let's write a function to handle a POST request made to the 'login' endpoint, as if a user was trying to log in:

app.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      success: false,
      message: 'password and username do not match'
    })
  }
})
