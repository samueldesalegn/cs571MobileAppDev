const express = require('express');
const bookController = require('../controllers/bookController');



const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/:id', bookController.getBookById);
router.post('/', bookController.save);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.deleteById);
// Add a new route for searching books by category
// router.get('/category/:category', bookController.getBooksByCategory);





module.exports = router;
