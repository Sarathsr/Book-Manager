import { BookLists } from '../models/booklists';

export const booksPage = async (req, res, next) => {
  try {
    // console.log(BookLists.find());
    const booklists = await BookLists.find();
    res.status(200).json({ booklists });
  } catch (err) {
    next(err);
  }
};

export const addBook = async (req, res, next) => {
  const { title, author, category, ISBN, blurb } = req.body;
  try {
    const m = await BookLists({ title, author, category, ISBN, blurb }).save();
    res.status(201).json({ success: true, book: m });
  } catch (err) {
    next(err);
  }
};