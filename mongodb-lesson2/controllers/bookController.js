const Books = require('../models/books');

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Books.getAll();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.save = async (req, res, next) => {
  try {
    const bks = req.body;
    const book = await new Books(bks.title, bks.ISBN, bks.publishedDate, bks.author).save();
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await Books.findById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.update = async (req, res, next) => {
  try {
    const bks = req.body;
    await new Books(bks.title, bks.ISBN, bks.publishedDate, bks.author).update(req.params.id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    const result = await Books.deleteById(req.params.id);
    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


