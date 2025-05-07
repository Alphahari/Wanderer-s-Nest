import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching all experiences
export const fetchAllExperiences = createAsyncThunk(
  'experiences/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/fetch/experiences', {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch experiences");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  experiences: [],
  loading: false,
  error: null,
  createStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const experienceSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {
    clearExperiencesError: (state) => {
      state.error = null;
    },
    resetCreateStatus: (state) => {
      state.createStatus = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all experiences cases
      .addCase(fetchAllExperiences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllExperiences.fulfilled, (state, action) => {
        state.loading = false;
        state.experiences = action.payload.data;
      })
      .addCase(fetchAllExperiences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export const { clearExperiencesError, resetCreateStatus } = experienceSlice.actions;

// Selectors
export const selectAllExperiences = (state) => state.experiences.experiences;
export const selectExperiencesLoading = (state) => state.experiences.loading;
export const selectExperiencesError = (state) => state.experiences.error;

export default experienceSlice.reducer;