import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définir RootState ici si vous n'avez pas de fichier Store séparé
export interface RootState {
  auth: AuthState;
  // Ajoutez d'autres slices si nécessaire
}

interface AuthState {
  user: null | { id: string; email: string };
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: { id: string; email: string }; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;