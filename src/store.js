import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  bill: '',
  numOfPeople: '',
  tip: 5,
};

const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setBill(state, action) {
      state.bill = action.payload;
    },
    setNumOfPeople(state, action) {
      state.numOfPeople = action.payload;
    },
    setTip(state, action) {
      state.tip = action.payload;
    },
    resetForm() {
      return initialState;
    },
  },
});

const store = configureStore({ reducer: { form: formReducer.reducer } });

export const { setBill, setNumOfPeople, setTip, resetForm } =
  formReducer.actions;

export default store;
