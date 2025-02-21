import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://vefgdfd:.3UJQGUC(Vy(Xhc@cluster0.ob94i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
