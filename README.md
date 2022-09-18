<img src="https://static.wixstatic.com/media/b21544_d39286c28cd542fcac93cdc1f227d9c3~mv2.png/v1/fill/w_120,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b21544_d39286c28cd542fcac93cdc1f227d9c3~mv2.png" alt="alt text" title="HTM"/>
Built for HTM 3.0

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

# Frontend
Web-Framework: [ReactJS](https://reactjs.org/)\
Build-Framework: [Vite](https://vitejs.dev/)\
**Scripts**
Run Development Server: ``npm run dev``\
Run Build Process: ``npm run build``\
Preview Build: ``npm run preview``

# Backend
Framework: [ExpressJS](https://expressjs.com/)\
**Scripts**
Run Server: ``npm start``

**API ENDPOINTS**
1. /api/signin
```
@post
# Body
email:  string().email().required(),
password:  string().required(),

#Return Payload
{
	token: <JWT Token>,
	firstName: <firstName>,
	lastName: <lastName>
}
```
2. /api/report
```
@post
# Body
name:  string(),
email:  string().email(),
contact:  number(),
location:  string().required(),
description:  string().required(),
accusedDetails:  string().required(),
```
3. /api/dashboard/reports/all 🔒
```
@get
# Header
[Authorization Bearer Token]

#Return Payload
[{
	_id,
	name,
	email,
	contact,
	location,
	description,
	accusedDetails,
	status,
	isResolved,
	note
},...]
```
4. /api/dashboard/reports/report/:id🔒
```
@get
# Header
[Authorization Bearer Token]

# Params
id: [Report ID]

#Return Payload
{
	_id,
	name,
	email,
	contact,
	location,
	description,
	accusedDetails,
	status,
	isResolved,
	note
}
```
5. /api/dashboard/reports/update/:id🔒
```
@put
# Header
[Authorization Bearer Token]

# Params
id: [Report ID]

#Body
status:  string(),
isResolved:  boolean(),
note:  string(),
```

# Upcoming Features
1. Better UI & UX.
2. Dynamic content on Home Page which can be controlled with the Dashboard.
3. One to One interaction with counsellor.
