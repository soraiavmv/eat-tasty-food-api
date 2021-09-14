import express from 'express';
import { getMenu, getMenuCategoryItems, getMenuItem } from './services/menu-service.js';

const app = express();
const PORT = 8000;

app.get('/api/menu', async (req, res) => {
    try {
        const data = await getMenu();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
});

app.get('/api/menu/option/:item', async (req, res) => {
    try {
        const data = await getMenuItem(req.params.item);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
});

app.get('/api/menu/:category', async (req, res) => {
    try {
        const data = await getMenuCategoryItems(req.params.category);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
});

app.listen(PORT);