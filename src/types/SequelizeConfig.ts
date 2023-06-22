import { SequelizeOptions } from 'sequelize-typescript';

export type SequelizeConfigLocal = {
  database: string,
  username: string,
  password: string,
  options?: SequelizeOptions,
};

export type SequelizeConfigRemote = {
  uri: string,
  options?: SequelizeOptions,
};
