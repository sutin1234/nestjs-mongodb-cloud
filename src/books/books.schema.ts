import * as mongoose from 'mongoose';
export const BooksSchema = new mongoose.Schema({
  name: String,
  desc: String,
  num: Number,
  price: Number,
  discount: Number,
  created: { type: Number, default: Date.now },
  updated: { type: Number, default: Date.now },
  deleted: { type: Number, default: Date.now },
});
