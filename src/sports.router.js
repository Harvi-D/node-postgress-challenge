const router = require("express").Router();
const controller = require("./sports.controller");

router
    .route('/')
    .get(controller.list);

router 
    .route('/delete/:sport_id')
    .delete(controller.delete);    

module.exports = router;