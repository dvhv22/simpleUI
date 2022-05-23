import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        name: 'Nguyen Van A',
        email: 'xyz@gmail.com',
        date: '2020-12-01',
        age: 21,
        id: 1
    },
    {
        name: 'Pham Van B',
        email: 'abc@gmail.com',
        date: '2020-12-10',
        age: 20,
        id: 2
    },

]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, email, age) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        name,
                        email,
                        age,
                    }
                }


            }

        }
    }
})

export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;