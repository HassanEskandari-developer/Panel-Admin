import { create } from 'zustand';

// Check for existing user data in localStorage
const getUserFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

const useUserStore = create((set) => ({
  user: getUserFromLocalStorage(),
  setUser: (userData) => {
    // Save to Zustand state
    set({ user: userData });
    // Save to localStorage for persistence
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user'); // Clear storage on logout
    }
  },
}));

export default useUserStore;