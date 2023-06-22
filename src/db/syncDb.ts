import { initDb } from './initDb';
import { User } from '../models/User';

const syncDb = async () => {
  global.console.log('START');
  
  const sequelize = await initDb();

  sequelize.addModels([User]);

  await User.sync({ force: true });

  global.console.log('Table succesfully synchronized');
}

syncDb();
