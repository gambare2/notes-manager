import {createSlice} from '@reduxjs/toolkit'


let notesFromStorage = [];

try {
  const stored = localStorage.getItem('notes');
  notesFromStorage = stored ? JSON.parse(stored) : [];
} catch (e) {
  console.warn('Invalid notes JSON in localStorage:', e);
  notesFromStorage = [];
  
}

const initialState = {
  notes: notesFromStorage
};


export const noteslice = createSlice({
    name: 'notes',
    initialState, 
    reducers: {
        addNotes: (state, action) => {
            state.notes = action.payload
        },
        updateNotes: (state, action) => {

        },
        deleteNotes: (state, action) => {

        },
        resetNotes: (state, action) => {

        }
    }
})

export const notesReducer = noteslice.reducer

export const {addNotes, updateNotes, deleteNotes, resetNotes} = noteslice.actions

export default noteslice.reducer
