import express from 'express';
import routes from './routes/bookRoutes.js';

const app = express();

app.use(express.json());
app.use("/api/books", routes)

app.get('/', (req, res)=> res.send({message:"halo dunia"}));



app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});

