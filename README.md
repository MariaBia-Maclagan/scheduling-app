# scheduling-app

The scheduling app is for a store manager to organise staff shifts throughout the week from Sunday (Sun) to Saturday (Sat). From the Admin component the user will be able to POST each employee time for each day of the week in sequence. From the Adminview component the user can DELETE individual staff times if needed and view schedule for an specific week.
Other users should be able to only view the schedule times once posted in a separated user view component.

# To run the app

1- Create the database in the MySQL CLI, type `create database hours;`
3- create `.env` file 

DB_NAME = hours
DB_PASS= YOUR_PASSWORD

2- Replace `YOUR_PASSWORD` with your actual password on `.env` file
3- Run `node model/database.js` in your **TERMINAL** to create table schedule

4- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.

# Database Schema

![](../images/database.png)

# Routes

![](../images/routes.png)
