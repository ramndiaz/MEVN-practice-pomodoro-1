import axios from './axios';
import { AxiosResponse } from 'axios';
import { User } from '../interfaces/User';

export const createUser = async (user: User) => await axios.post("/users", user);

export const getUsers = async (): Promise<AxiosResponse<User[]>> => await axios.get("/users");

