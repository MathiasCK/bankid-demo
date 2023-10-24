# BankID Authentication with Express and Passport 🔐

This is a sample Express.js application that demonstrates how to implement authentication using the Norwegian BankID system with Passport.js and Express Sessions.

## Prerequisites 📋

Before running the application, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later recommended) - Verify by running `node --version` ✔️
- [npm](https://www.npmjs.com/) - Verify by running `npm --version` ✔️
- Generate a bank id end user at [https://ra-preprod.bankidnorge.no/#/generate](https://ra-preprod.bankidnorge.no/#/generate)

## Getting Started 🚀

1. Clone this repository to your local machine:

```shell
git clone https://github.com/MathiasCK/bankid-demo.git
```

2. Navigate to the project directory:

```shell
cd bankid-demo
```

3. Install dependencies:

```shell
npm install
```

4. Create a .env file in the root directory of the project and add the following environment variables:

```shell
SESSION_SECRET=your-secret-session-string
CRIIPTO_DOMAIN=your-bankid-domain
CRIIPTO_CLIENT_ID=your-client-id
CRIIPTO_CLIENT_SECRET=your-client-secret
CRIIPTO_CALLBACK=your-cripto-callback
CRIPTO_LOGOUT_REDIRECT=your-cripto-logout-redirect
```

5. Start the application:

```shell
npm start
```

The application will run on [http://localhost:3002](http://localhost:3002)

## Usage 📖

- Access the application in your web browser at [http://localhost:3002](http://localhost:3002)
- Click on the "Login with BankID" button to initiate the BankID authentication process.
- Follow the BankID authentication flow.
- Upon successful authentication, you will be redirected to the "Success" page with your user information.

## Folder structure 🗂️

- `app.js`: The main Express.js application file.
- `auth/`: Contains Passport.js authentication setup and strategies.
- `views/`: Stores the EJS view templates.
- `routes/`: Contains route modules for different parts of the application.

## Screenshots 📸

![Screenshot 2023-09-21 at 08 48 12](https://github.com/MathiasCK/bankid-demo/assets/26365473/c9b4de9b-0c97-4e06-8b10-29fb6ff104f4)

![Screenshot 2023-09-21 at 08 49 24](https://github.com/MathiasCK/bankid-demo/assets/26365473/2aa19591-4602-424e-be26-fab99c0ed5bf)

## Contributing 🤝

Feel free to contribute to this project by submitting issues or pull requests.
