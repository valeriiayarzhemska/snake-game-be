import { Sequelize } from 'sequelize-typescript';
import { developmentConfig, productionConfig } from '../config';
import { setModels } from './setModels';

export const initDb = async() => {
  let sequelize;

  if (process.env.NODE_ENV === 'production') {
    setModels(productionConfig);

    const { uri, options } = productionConfig;

    sequelize = new Sequelize(uri, options);
  } else {
    setModels(developmentConfig);

    const { database, username, password, options } = developmentConfig;

    sequelize = new Sequelize(database, username, password, options);
  }

  try {
    sequelize.authenticate({ logging: false });
    global.console.log('Connection to db has been established successfully.');
  } catch (error) {
    global.console.error('Unable to connect to the database:', error);
  }

  return sequelize;
};
