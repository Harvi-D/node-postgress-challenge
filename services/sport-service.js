
const SportsService = {
    getSports(db) {
      return db
        .from('sport')
        .select(
          'sport.id',
          'sport.name',
          'sport.players',
        );
    },
    deleteSport(db, sport_id) {
      return db('sport')
        .where({'id': sport_id})
        .delete()
    },
    readSport(db, sport_id){
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