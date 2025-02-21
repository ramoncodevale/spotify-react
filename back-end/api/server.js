import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json)

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs' ");
});

app.get("/artists", async (request, response) => {
  try {
    const artists = await db.collection("artists").find({}).toArray();
    response.json(artists);
  } catch (error) {
    response.status(500).json({ error: "Erro ao buscar artistas" });
  }
});

app.get("/songs", async (request, response) => {
  try {
    const songs = await db.collection("songs").find({}).toArray();
    response.json(songs);
  } catch (error) {
    response.status(500).json({ error: "Erro ao buscar músicas" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
