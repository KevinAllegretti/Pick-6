"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
const uri = 'mongodb+srv://Kingbeats17:Yunglean17@pick6.nomxpzq.mongodb.net/'; // Replace with your MongoDB connection string
let client;
let clientPromise;
async function connectToDatabase() {
    if (!client) {
        client = new mongodb_1.MongoClient(uri);
        clientPromise = client.connect();
    }
    try {
        await clientPromise;
        console.log("Successfully connected to the database!");
        return client.db('Pick6');
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}
exports.connectToDatabase = connectToDatabase;
