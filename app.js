import express from 'express';
import cors from 'cors';
import {
    getMenu,
    getMenuCategories,
    getMenuCategoryItems,
    getMenuItem
} from './services/menu-service.js';

const app = express();
const PORT = 8000;

app.use(cors());

app.get('/api/menu', async (req, res) => {
    try {
        const data = await getMenu();
        return sendResponse(res, data);
    } catch (e) {
        return dealWithError(res, 500, 'Internal Server Error');
    }
});

app.get('/api/menu/option/:id', async (req, res) => {
    const id = parseInt(req.params.item, 10);

    if (Number.isNaN(id)) {
        return dealWithError(res, 404, 'Not Found');
    }

    try {
        const data = await getMenuItem();
        return sendResponse(res, data);
    } catch (e) {
        return dealWithError(res, 500, 'Internal Server Error');
    }
});

app.get('/api/menu/:category/items', async (req, res) => {
    try {
        const data = await getMenuCategoryItems(req.params.category);
        return sendResponse(res, data);
    } catch (e) {
        return dealWithError(res, 500, 'Internal Server Error');
    }
});

app.get('/api/menu/categories', async (req, res) => {
    try {
        const data = await getMenuCategories();
        return sendResponse(res, data);
    } catch (e) {
        return dealWithError(res, 500, 'Internal Server Error');
    }
});

const sendResponse = (res, data) => {
    return data && data.length > 0 ?
        res.status(200).json(data) :
        dealWithError(res, 404, 'Not Found');
}

const dealWithError = (res, status, message) => {
    return res.status(status).json(message);
}

app.listen(PORT);