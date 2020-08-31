import { axiosInstance } from './axiosInstance';

export type TeamType = 'Fantasy' | 'Real';

export type Team = {
  id: string;
  name: string;
  description?: string;
  website?: string;
  type: TeamType;
};

const getAll = async (): Promise<Team[]>=>{
  const { data } = await axiosInstance.get('team');
  return data;
};
const remove = async (id: string): Promise<void>=>{
  await axiosInstance.delete(`team/${id}`);
};
const findById = async (id: string): Promise<Team>=>{
  const { data } = await axiosInstance.get(`team/${id}`);
  return data;
};

export const teamService = {
  getAll,
  remove,
  findById,
};

