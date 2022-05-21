# scheduling-app

The scheduling app is for a store manager to organise staff shifts throughout the week form sun to sat. From the admin component the user will be able to post each employee time for each day of the week in sequence. From the Adminview component the user can delete individual staff times if needed and view shedule for an specific week.
Other users should be able to only view the schedule times once posted in a separated user view.

# To run the app

1- Create the database in the MySQL CLI, type `create database hours;` 
2- Replace `YOUR_PASSWORD` with your actual password on `.env` file
3- Run `node model/database.js` in your **TERMINAL** to create table schedule

4- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.
