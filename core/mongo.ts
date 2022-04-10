import { MongoClient, Database } from 'mongo';

export class MongoDB {

    private static client = new MongoClient();

    static async connect(connectionString: string) {
        try {
            await MongoDB.client.connect(connectionString);
        }
        catch {
            console.error('unable to connect to mongodb server');
        }
    }

    static getDatabase(database: string) {
        return MongoDB.client.database(database);
    }

    static async getCollection<T>(collection: string, database: string | Database) {
        if (typeof database === 'string') {
            let db = await MongoDB.getDatabase(database);
            return db.collection<T>(collection);
        }
        else {
            return database.collection<T>(collection);
        }
    }

    static async close() {
        try {
            MongoDB.client.close();
        }
        catch {
            console.error('unable to close mongodb connection');
        }
    }

}