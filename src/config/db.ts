import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import { Trains } from '../entity/trains';

dotenv.config();

const connection = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Trains],
    logging: true,
    synchronize: true,
});

export default connection;