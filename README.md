# Authentication with MERN stack

This is a POC application built in collaboration between [Pete Hall](https://github.com/Pete-Hall) and [Marc McCarthy](https://github.com/marc-mccarthy).

![Oauth2 Demo](./assets/oauth2-demo.gif)

This project implements a login with two authentication methods. First, the easy way to avoid the sign-in process, using OAuth 2.0 authentication with Google or GitHub. On the other hand, creating an account and then using the credentials.

After login, JSON Web Token (JWT) is used for session management.

## Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

* Authentication features:
  * Sign in with credentials (fullname, email and password).
  * Log in with credentials.
  * Log in with **Google**.
  * Log in with **GitHub**.

* **JSON Web Token** to manage users sessions.

* Logging:
  * Deploying configuration.
  * HTTP requests.
  * Authentication process by user.

## Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

Three main pages designed: Login, Register and Home page.

| Page          | Description                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------- |
| Login         | Allows users to login in the system with Google, GitHub or using credentials (email and password). |
| Register      | Allows users to create an account in the system (fullname, email, password).                       |
| Home          | Displays users information.                                                                        |
