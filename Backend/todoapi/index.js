import  express  from "express";
import "./Database/Connection.js";
import todoRoutes from './Routes/TodoRoutes.js';
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(cors());

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("Hello from server!");
});

app.use("/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server initialized at ${PORT}`));