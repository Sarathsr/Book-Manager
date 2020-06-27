import { UserLists } from '../models/userlists';

export const addUser = async (req, res, next) => {
  const { fname, lname, user, password } = req.body;
  try {
    const m = await UserLists({ fname, lname, user, password }).save();
    res.status(201).json({ success: true, user: m });
  } catch (err) {
    next(err);
  }
};