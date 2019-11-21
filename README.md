# :checkered_flag:What It Looks Like :checkered_flag:: 

![ReactEmail](public/App.png)

# How It's Made :nut_and_bolt:🔨 :hammer::wrench::
 This application built with React.js, Express, Node, Passport, & Using MongDB Atlas for a database.

## Optimizations.
Install Passport.

 # How It's Works:white_check_mark::
1.) A user can send form data to Mongodb Databse.

2.) User can see the json data once submit as an alert!

## Lessons Learned :mortar_board::


 
# My Awesome Project
This is a MERN-Stack Email application that allows data to be submit via Formik and Yup validation. As you may know, React is a JavaScript library for building user interfaces. That’s it. It’s a way to use JavaScript to define UI elements based on user-defined properties and internal state. 

like so:


```//------
import React, { Component } from 'react'
 
export default class SimpleForm extends Component {
  state = {
    searchTerm: '',
  }
 
  handleSubmit = event => {
    event.preventDefault() // prevent form post
    this.props.onSearch(this.state.searchTerm)
  }
 
  handleSearch = event => {
    const searchTerm = event.target.value
    this.setState((prevState, props) => ({
      searchTerm,
    }))
  }
 
  render = () => (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search games"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
```

With Formik, You can use it as a higher-order component or a render callback (also applicable as a child function). This allows for greater flexibility in the props and state, as well as enhanced composability. There is also no need to track the state of the form elements explicitly. You can allow your form to handle itself, which is one of the key elements of React and a component-based architecture.Formik leans on Yup for validation. This provides a simple, yet powerful, way to validate an object schema for your form controls. The validationSchema prop takes a Yup schema or a function that returns one. There are many types of validators, such as for objects, strings, numbers, dates, etc. You can also create your own. The validators can be chained to allow precise constraints for acceptable values.


```//------
import React, { Component } from 'react'
import TextInput from './TextInputFormik'
import { Formik, Form, Field } from 'formik'
import Yup from 'yup'
import isEmpty from 'lodash/isEmpty'
 
export default class AddGameForm extends Component {
  render() {
    return (
      <div className="addGameForm">
        <Formik
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .min(3, 'Title must be at least 3 characters long.')
              .required('Title is required.'),
          })}
          initialValues={{
            title: 'asdf',
            releaseYear: '',
            genre: '',
            price: '12',
          }}
          onSubmit={(values, actions) => {
            // this could also easily use props or other
            // local state to alter the behavior if needed
            // this.props.sendValuesToServer(values)
 
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={({ values, touched, errors, dirty, isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="title"
                label="Title"
                component={TextInput}
              />
              <Field
                type="text"
                name="releaseYear"
                label="Release Year"
                component={TextInput}
              />
              <Field
                type="text"
                name="genre"
                label="Genre"
                component={TextInput}
              />
              <Field
                type="text"
                name="price"
                label="Price"
                component={TextInput}
              />
              <button
                type="submit"
                className="btn btn-default"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Add Game
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}
```

## Express, Nodemon, Body-Parser, Cors

The first thing I wanted to do is to create a server where browsers can connect to. We can do so with the help of a listen method provided by Express You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. Like app.METHOD or You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function and using Nodemon to restart the server automatically whenever I or the user save a file that the server uses.

```const express = require('express');
const app = express();

app.use(express.json());
```

```//------
app.listen(8080, function() {
  console.log('listening on 3000')
})
```
or 

```//------
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});
```

Express allows us to add middleware like body-parser to our application with the use method. You’ll hear the term middleware a lot when dealing with Express. These things are basically plugins that change the request or response object before they get handled by our application. Make sure you place body-parser before your CRUD handlers!

const express = require('express')
const bodyParser= require('body-parser')
const app = express()

```//------
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
// All your handlers here...
```
A request for a resource (like an image or a font) outside of the origin is known as a cross-origin request. CORS (cross-origin resource sharing) manages cross-origin requests.

Cross-origin requests, however, that means servers must implement ways to handle requests from origins outside of their own. CORS allows servers to specify who (i.e., which origins) can access the assets on the server, among many other things.

The CORS standard is needed because it allows servers to specify not just who can access its assets, but also how the assets can be accessed.

```const cors = require('cors');

app.use(cors());

## Lessons Learned:
How to properly use Formik, Using Axios to post that data onSubmit click of a button.
Formik had cool props like errors and touched and used correctly when set up if a field is visited (touched) when you set up your Yup for object schema validation. It has an API that's pretty similar Joi / React PropTypes and this is a complementary package Formik) when it is blurred it will display the error you created. Here is an example of the code:

With firstName being the initialValue passed thru to Formik from my higher order component I created. It now knows that that TextInput.js is a text input field that is named “firstName” and it is a string that is required and has a minimal of 2 characters, if the field is touched ( error={touched.firstName && errors.firstName} ) then blurred ( {handleBlur} ) it will display the message created in the .min function. Or touched and there was no onChange it will let you know that it is required as well.


```validationSchema={Yup.object().shape({
     firstName: Yup.string()
       .required('Your First Name Is Required!')
       .min(2, 'Your First Name Needs To Be Valid'),
   })}
```

## MongoDB & Proxy

Most importantly I learned how to set up Express and MongoDB in a file quiet quickly and setting up my package.json to have concurrently run both scripts for the backend and frontend servers.

This wasn't totally smooth though because I had issues on hitting the routes from the front end to the backend. So for anyone in the future runs into this issue, remember when you set up your server file and it opens up on lets say port http://localhost:3030/ and your React app is on http://localhost:3000/ you have to post on the front end like so ` axios .post("localhost:3030/api/form", values, actions).then(response => {console.log(response); })` Because thats where your server is listening to.

    ```onSubmit={(values, actions) => {
              setTimeout(() => {
                axios
                .post('/api/form', values, actions)
                .then(response => {
                  console.log(response);
                })
                .catch(error => {
                  console.log(error.response);
                });
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 400);
            }}
            
action="http://localhost:3030/api/form" method="POST" ```

```const PORT = process.env.PORT || 3030;
const app = express();
​
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
​
app.use(require('./routes/routes'));
app.post("/api/form", async (req, res) => {
  const firstName =   req.body.firstName;
  const middleName =  req.body.middleName;
  const lastName =  req.body.lastName;
  const phone =  Number(req.body.phone);
```



# Portfolio :open_file_folder::

** :computer:   WEBSITE:** [John Fleurimond](http://johnfleurimond.com)

# How To Get It Started :arrow_forward: :

## Installation

1. Clone repo
2. run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
### `npm run prettier`
This corrects the format.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.