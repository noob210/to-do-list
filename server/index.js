import express from 'express';
import { pool } from './db.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.post('/login', async (req, res) => {
    res.status(200).json({ success: false, message: "Invalid username or password" });
});

app.get('/get-list', async (req, res) => {

    const list = await pool.query('SELECT * FROM lists');

    res.status(200).json({ success: true, list: list.rows });
});


app.get('/get-items/:id', async (req, res) => {
    const listId = req.params.id;

    const result = await pool.query(
        'SELECT * FROM items WHERE list_id = $1',
        [listId]
    );
    const items = result.rows;

    if (items.length === 0) {
        return res.status(200).json({
            success: false,
            message: "List not found"
        });
    }

    res.status(200).json({ success: true, items });
});

app.post('/add-list', async(req, res) => {
    const { listTitle } = req.body;

    await pool.query(`
        INSERT INTO lists (title, status) 
        VALUES ($1, $2)`, 
        [listTitle, "pending"]);

    res.status(200).json({ 
        success: true, 
        message: "List added successfully" 
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});