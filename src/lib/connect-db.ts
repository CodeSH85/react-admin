import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Invalid URI.');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  console.log('========= init db....');
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    try {
      cached.promise = await mongoose.connect(uri);
      console.log('Connected');
      return mongoose;
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
