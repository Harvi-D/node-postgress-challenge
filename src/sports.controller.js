const { SportsService } = require( '../services/sport-service' );
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const knex = require( 'knex' );
const { PORT, DATABASE_URL } = require( '../config' );

const db = knex({
    client: 'pg',
    connection: DATABASE_URL
});

async function sportExists(req, res, next) {
    const sport = await SportsService.readSport(db, req.params.sport_id);
    console.log(sport);
    if (sport) {
        res.locals.sport = sport;
        return next();
    }
    next({ status: 404, message: `Sport not found.` })
} 

async function list(req, res, next) {
    //const data = await SportsService.getSports();
    res.status(200).json(await SportsService.getSports(db));
} 

async function destroy(req, res, next) {
    const { sport } = res.locals;
    //console.log(res.locals);
    await SportsService.deleteSport(sport.id);
    res.sendStatus(204);
}

module.exports = {
    list: asyncErrorBoundary(list),
    delete: [asyncErrorBoundary(sportExists), asyncErrorBoundary(destroy)],
}