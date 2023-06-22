import { Request, Response } from 'express';
import { UsersService } from '../services/userService'
import { User } from '../models/User';
import { UserScore, UserValues } from '../types/User';


export class UserController {
  userService: UsersService;

  constructor() {
    this.userService = new UsersService();
  }

  getUsers = async (req: Request, res: Response<User[]>) => {
    const users = await this.userService.getAllUsers();

    return res.send(users);
  }

  getTopUsers = async (req: Request, res: Response<User[]>) => {
    const topUsers = await this.userService.getTopUsers();

    return res.send(topUsers);
  }

  getOne = async (req: Request, res: Response<User>) => {
    const { id } = req.params;
  
    if (!id) {
      res.sendStatus(400);
  
      return;
    }
  
    const foundUser = await this.userService.getUserById(id);
  
    if (!foundUser) {
      res.sendStatus(404);
  
      return;
    }
  
    return res.send(foundUser);
  }

  addUser = async (
    req: Request<unknown, User, UserValues>,
    res: Response<User | string>
  ) => {
    const { body } = req;

    const { name, score } = req.body;

    if (!name) {
      res.statusCode = 400;
      return res.send('Name is not valid');
    }

    if (score === null || score === undefined) {
      res.statusCode = 400;
      return res.send('Score is not written');
    }

    const user = await this.userService.addUser(body);

    res.statusCode = 201;
    return res.send(user);
  }

  update = async(
    req: Request<{ id: string }, User, UserScore>,
    res: Response<User | string>
  ) => {
    const { id } = req.params;
    const { score } = req.body;
  
    if (score === null || score === undefined || !id) {
      res.sendStatus(400);
  
      return;
    }
  
    const foundUser = await this.userService.getUserById(id);
  
    if (!foundUser) {
      res.sendStatus(404);
  
      return;
    }
  
    await this.userService.updateUser(id, score);
  
    const updatedUser = await this.userService.getUserById(id);

    if (!updatedUser) {
      res.sendStatus(404);
  
      return;
    }
  
    return res.send(updatedUser);
  }
}
