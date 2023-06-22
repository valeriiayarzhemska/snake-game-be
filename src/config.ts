import dotenv from 'dotenv';
import {
  SequelizeConfigLocal,
  SequelizeConfigRemote,
} from './types/SequelizeConfig';

dotenv.config();

export const developmentConfig: SequelizeConfigLocal = {
  database: process.env.DB_NAME || 'postgres',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'wrong password',
  options: {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
  },
};

export const productionConfig: SequelizeConfigRemote = {
  uri: process.env.DB_URI || 'there should be uri to db',
  options: {
    dialectOptions: {
      ssl: true,
    },
  },
};
