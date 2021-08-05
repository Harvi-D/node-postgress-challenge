require( 'dotenv' ).config();
const express = require( 'express' );
const { PORT } = require( './config' );
const knex = require( 'knex' );
const { SportsService } = require( './services/sport-service' );
const sportsRouter = require("./src/sports.router");

const app = express();

/* Your code goes here */
app.use(express.json());

app.use("/api/sports", sportsRouter);

//not found
app.use((req, res, next) => {
    next({ status: 404 })
});

//error handler
app.use((error, req, res, next) => {
    const { status = 500, message= "something went wrong" } = error;
    res.status(status).json({ error: message });
});

app.listen( PORT, () => {
    console.log( `Server listening at http://localhost:${PORT}` );
});