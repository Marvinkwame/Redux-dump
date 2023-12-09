import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Hatake Kakashi' },
    { id: '1', name: 'Levi Ackerman' },
    { id: '2', name: 'Erwin Smith' }
]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})


export const selectAllUsers = (state) => state.users;


export default userSlice.reducer;


