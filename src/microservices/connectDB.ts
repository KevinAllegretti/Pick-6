import { MongoClient } from 'mongodb';


const uri = 'mongodb+srv://Kingbeats17:Yunglean17@pick6.nomxpzq.mongodb.net/'; // Replace with your MongoDB connection string
let client;
let clientPromise;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  try {
    await clientPromise;
    console.log("Successfully connected to the database!");
    return client.db('Pick6');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
