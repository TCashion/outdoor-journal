const router = require('express').Router();
const tripsCtrl = require('../../controllers/trips');
const authorizations = require('../../config/middleware/authorizations');

/*---------- Public Routes ----------*/
router.get('/', tripsCtrl.indexForAPI);


/*---------- Protected Routes ----------*/


module.exports = router; 