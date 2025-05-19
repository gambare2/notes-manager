import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    notes: localStorage.getItem('notes')
    ? JSON.parse (localStorage.getItem('notes'))
    : []
}

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
