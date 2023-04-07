import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface State {
  example: string;
}

const initialState: State = {
  example: '',
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    exampleAccion: () => {
      console.log('exame');
    },
  },
});

export const { exampleAccion } = exampleSlice.actions;
export const selectCount = (state: RootState) => state.example;
