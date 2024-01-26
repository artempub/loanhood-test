
# LOANHOOD TEST PROJECT - BACKEND

A backend project for quickly building RESTful APIs using Node.js, Express, and Mongoose to provide Item service for React frontend.



## Commands
Install dependencies:

```bash
yarn  install
```
  

Running locally:

```bash
yarn  dev
```

Running in production:

```bash
yarn  start
```

## Environment Variables

  

The environment variables can be found and modified in the `.env` file. They come with these default values:

  

```bash
# Port number

PORT=3000

  

# URL of the Mongo DB

MONGODB_URL=mongodb+srv://askarovdavron2:1ygD00wikjNoPW4y@cluster0.vvwiioy.mongodb.net/

  

# JWT

# JWT secret key

JWT_SECRET=thisisasamplesecret

# Number of minutes after which an access token expires

JWT_ACCESS_EXPIRATION_MINUTES=30

# Number of days after which a refresh token expires

JWT_REFRESH_EXPIRATION_DAYS=30

# Number of minutes after which a reset password token expires

JWT_RESET_PASSWORD_EXPIRATION_MINUTES=10

# Number of minutes after which a verify email token expires

JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=10

  

# SMTP configuration options for the email service

# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create

SMTP_HOST=email-server

SMTP_PORT=587

SMTP_USERNAME=email-server-username

SMTP_PASSWORD=email-server-password

EMAIL_FROM=support@yourapp.com

```

  

## Project Structure

  

```

src\

|--config\ # Environment variables and configuration related things

|--controllers\ # Route controllers (controller layer)

|--docs\ # Swagger files

|--middlewares\ # Custom express middlewares

|--models\ # Mongoose models (data layer)

|--routes\ # Routes

|--services\ # Business logic (service layer)

|--utils\ # Utility classes and functions

|--validations\ # Request data validation schemas

|--app.js # Express app

|--index.js # App entry point

```

## API Documentation

### API Endpoints

  

List of available routes:

**Item routes**:\

`POST /v1/item` - create an item\

`GET /v1/item` - paginate items\

`GET /v1/item/:itemId` - get item\

`PATCH /v1/item/:itemId` - update item\

`DELETE /v1/item/:itemId` - delete item

  

## Error Handling

  

The app has a centralized error handling mechanism.

  

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

  

```javascript

const  catchAsync = require('../utils/catchAsync');

  

const  controller = catchAsync(async (req, res) => {

// this error will be forwarded to the error handling middleware

throw  new  Error('Something wrong happened');

});

```

  

The error handling middleware sends an error response, which has the following format:

  

```json

{

"code": 404,

"message": "Not found"

}

```


### paginate

  

The paginate plugin adds the `paginate` static method to the mongoose schema.

  

Adding this plugin to the `Item` model schema will allow you to do the following:

  

```javascript

const  queryItems = async (filter, options) => {

const  items = await  Item.paginate(filter, options);

return  items;

};

```
