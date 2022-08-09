import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import tasksRoutes from './routes/tasks';
import usersRoutes from './routes/users';

const app = express();

app.use(morgan("dev")); //recibir informacion en consola de las respuestas del servidor
app.use(cors());        //evita el error de origen cruzado en los servidores
app.use(express.json());//para que entienda los json que el frontend nos envie

app.use("/api", tasksRoutes);
app.use("/api", usersRoutes);

export default app;