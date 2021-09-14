import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient('mongodb://localhost:27017');
const DB_NAME = 'eat-tasty-food';

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