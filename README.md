# Welcome to the project [Bullying Reporter](https://bullyingreporter.netlify.app/)!

Project Build: https://bullyingreporter.netlify.app/
```
# Admin Credentials
  admin@bullyreport.com
  Afhfhfaaaaa@1
```

Backend: https://github.com/legend7bot/bullying-reporter-server
<br/>
Backend-Build: https://bullying-reporter.herokuapp.com/api/

**Environment Configuration for Backend**
```
# Create .env configuration file in backend. 

MONGO_URI= <Enter your MongoDB database URL>
JWTPRIVATEKEY= <Enter a Private Key for securing JWT>
SALT= <Enter SALT for password hashing>
PORT= <Enter Port number for your backend server>
```
**Steps to run the project locally**
```
# Clone both backend and client repository to your local system.
# Run 'npm install' in both client side and server side projects.
# To start Frontend: 'npm run dev'.
# To start Backend: 'npm start'.
# To connect your local backend server to the frontend, edit the API URL in frontend files:
1. src\features\report\reportService.jsx
2. src\features\auth\authService.jsx
3. src\pages\DashboardReport.jsx
```
