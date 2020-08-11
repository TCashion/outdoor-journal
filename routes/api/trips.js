const router = require('express').Router();
const tripsAPICtrl = require('../../controllers/api/trips');
const authorizations = require('../../config/middleware/authorizations');

/*---------- Public Routes ----------*/
router.get('/', tripsAPICtrl.index);


/*---------- Protected Routes ----------*/


module.exports = router; 