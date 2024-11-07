'use client';

import { create } from 'zustand';

const useSettingStore = create((set) => ({
  namePage: 'Dashboard',
  setNamePage: (name) => set({ namePage: name }),
}));

export default useSettingStore;