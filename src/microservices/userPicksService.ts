const { connectToDatabase } = require('./connectDB');

export async function addPick(pick: any) {
  const db = await connectToDatabase();
  const collection = db.collection('userPicks');
  return await collection.insertOne(pick);
}

export async function getPicksByUsername(username: any) {
    const db = await connectToDatabase();
    const collection = db.collection('userPicks');
    return await collection.find({ username }).toArray();
  }
  