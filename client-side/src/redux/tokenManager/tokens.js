import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const getTokenFromLS = () => {
  try {
    return localStorage.getItem('authToken') || null
  } catch (error) {
    console.error('Error accessing localStorage:', error)
    return null
  }
}

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_,thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.tokens.token;
    try {
      const response = await fetch(import.meta.env.VITE_REDUXSTORE_AUTH, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const setTokenInLS = (token) => {
  try {
    if (token) {
      localStorage.setItem('authToken', token)
    } else {
      localStorage.removeItem('authToken')
    }
  } catch (error) {
    console.error('Error accessing localStorage:', error)
  }
}

const initialState = {
  token: getTokenFromLS(),
  isLoading: false,
  error: null,
  userData: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      setTokenInLS(action.payload)
      state.error = null
    },
    clearToken: (state) => {
      state.token = null
      setTokenInLS(null)
      state.error = null
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
})

export const { setToken, clearToken, setLoading, setError } = authSlice.actions

// Selectors
export const selectToken = (state) => state.tokens.token
export const selectIsLoading = (state) => state.tokens.isLoading
export const selectError = (state) => state.tokens.error
export const selectUserData = (state) => state.tokens.userData

export default authSlice.reducer