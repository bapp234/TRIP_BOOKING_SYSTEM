import { useSyncExternalStore } from 'react';

const mockUser = {
  id: 'user-001',
  name: 'Nguyễn Văn A',
  email: 'user@example.com',
  phone: '0901234567',
};

let authState = {
  isAuthenticated: false,
  user: null,
};

const listeners = new Set();

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

const setAuthState = (nextState) => {
  authState = { ...authState, ...nextState };
  emitChange();
};

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => authState;

const login = () => {
  // TODO: Replace mock auth state with backend authentication API.
  setAuthState({
    isAuthenticated: true,
    user: mockUser,
  });
};

const register = (payload = {}) => {
  // TODO: Replace mock auth state with backend authentication API.
  setAuthState({
    isAuthenticated: true,
    user: {
      ...mockUser,
      name: payload.fullName || mockUser.name,
      email: payload.email || mockUser.email,
      phone: payload.phone || mockUser.phone,
    },
  });
};

const logout = () => {
  // TODO: Replace mock auth state with backend authentication API.
  setAuthState({
    isAuthenticated: false,
    user: null,
  });
};

export const useAuthStore = () => {
  const state = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return {
    ...state,
    login,
    register,
    logout,
  };
};
