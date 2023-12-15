import { create } from 'zustand';

export const useList = create((set) => ({
  list: [],
  setList: (list) => set({ list }),
}));
