import {
  SequelizeConfigLocal,
  SequelizeConfigRemote,
} from '../types/SequelizeConfig';
import { User } from '../models/User';

export const setModels = (
  sequelizeConfig: SequelizeConfigLocal | SequelizeConfigRemote,
): void => {
  if (sequelizeConfig.options) {
    sequelizeConfig.options.models = [User];
  }
};
