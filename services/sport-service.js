const db = require("../db/connection");

const SportsService = {
    getSports() {
      return db
        .from('sport')
        .select(
          'sport.id',
          'sport.name',
          'sport.players',
        );
    },
    deleteSport(sport_id) {
      return db('sport')
        .where({'id': sport_id})
        .delete()
    },
    readSport(sport_id){
      return db
        .from('sport')
        .select('*')
        .where({'sport.id': sport_id})
        .first();
    },
  }
  
  module.exports = {
      SportsService
  };