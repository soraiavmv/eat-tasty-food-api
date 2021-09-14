import express from 'express';
import { getMenu, getMenuCategoryItems, getMenuItem } from './services/menu-service.js';

const app = express();
const PORT = 8000;

app.get('/api/menu', async (req, res) => {
    try {
        const data = await getMenu();
        return sendResponse(res, data);
    } catch (e) {
        return dealWithError(res, e, 500, 'Internal Server Error');
    }
});

app.get('/api/menu/option/:id', async (req, res) => {
    const id = parseInt(req.params.item, 10);

    if (Number.isNaN(id)) {
        return dealWithError(res, null, 404, 'Not Found');
    }

    try {
        const data = await getMenuItem();
        return sendResponse(res, data);
    } catch (e) {
        return dealWithError(res, e, 500, 'Internal Server Error');
    }
});

app.get('/api/menu/:category', async (req, res) => {
    try {
        const data = await getMenuCategoryItems(req.params.category);
        return sendResponse(res, data);
    } catch (e) {
        return dealWithError(res, e, 500, 'Internal Server Error');
    }
});

const sendResponse = (res, data) => {
    return data && data.length > 0 ?
        res.status(200).json(data) :
        dealWithError(res, null, 400, 'Not Found');
}

const dealWithError = (res, error, status, message) => {
    console.log(error);
    return res.status(status).json(message);
}

app.listen(PORT);