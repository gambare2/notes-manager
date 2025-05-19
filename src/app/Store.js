import {configureStore} from '@reduxjs/toolkit'
import { notesReducer  }   from '../Noteslice/Slice'

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})