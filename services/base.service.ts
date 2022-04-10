import { MongoDB } from '../core/mongo.ts';
import { Database } from 'mongo';

export class BaseService {

    protected emdbApiDb: Database;

    constructor() {
        this.emdbApiDb = MongoDB.getDatabase("emdb-api-db");
    }
}