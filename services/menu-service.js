import { MongoClient } from 'mongodb';
import config from '../config/dev-config.json';

const mongoClient = new MongoClient(config.uri);
const DB_NAME = config.db;

const connect = async () => {
    return await mongoClient.connect();
};

const disconnect = async () => {
    return await mongoClient.close();
};

export const getMenu = async () => {
    try {
        connect();
        const data = await mongoClient.db(DB_NAME)
            .collection('menu')
            .find()
            .toArray();
        disconnect();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getMenuItem = async (id) => {
    try {
        connect();
        const data = await mongoClient.db(DB_NAME)
            .collection('menu')
            .findOne({
                id
            });
        disconnect();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getMenuCategoryItems = async (category) => {
    try {
        connect();
        const data = await mongoClient.db(DB_NAME)
            .collection('menu')
            .find({
                category
            })
            .toArray();

        disconnect();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getMenuCategories = async () => {
    try {
        connect();
        const data = await mongoClient.db(DB_NAME)
            .collection('menu')
            .distinct('category');
        disconnect();
        return data;
    } catch (e) {
        console.log(e);
    }
}