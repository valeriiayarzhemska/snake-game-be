import { User } from '../models/User';
import { UserName, UserScore, UserValues } from '../types/User';

export class UsersService {
  getAllUsers = async () => {
    const users = await User.findAll({
      order: [['score', 'DESC']],
    });

    return users;
  }

  getTopUsers = async () => {
    const users = await User.findAll({
      order: [['score', 'DESC']],
      limit: 5,
    });

    return users;
  }

  getUserById = (userId: string) => {
    return User.findByPk(userId);
  };

  addUser = async (userValues: UserValues) => {
    const { name, score } = userValues;

    const createdUser = await User.create({
      name,
      score,
    });

    return createdUser;
  }

  updateUser = (userId: string, userValues: Partial<User>) => {
    return User.update(userValues, {
      where: { id: userId },
    });
  };
}
