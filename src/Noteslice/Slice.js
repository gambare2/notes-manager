import { createSlice } from '@reduxjs/toolkit'


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
      state.notes.push(action.payload)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    updateNotes: (state, action) => {
      const idx = state.notes.findIndex(note => note.id === action.payload.id)
      if (idx!==-1)
        state.idx = action.payload
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    deleteNotes: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    editNotes: (state, action) => {
      console.log('Reducer editNotes called with:', action.payload);
      const index = state.notes.findIndex(note => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = action.payload;
        localStorage.setItem('notes', JSON.stringify(state.notes));
      }
    }

  }
})

export const notesReducer = noteslice.reducer

export const { addNotes, updateNotes, deleteNotes, editNotes } = noteslice.actions

export default noteslice.reducer
