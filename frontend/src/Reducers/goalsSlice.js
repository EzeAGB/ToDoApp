import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [
            {
                'name': 'sacar a pasear al perro',
                'description': 'sacar a pasear al perro',
                'dueDate': '2022-01-01'
            }
        ]
    },
    reducers: {
        addGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch ('http://localhost:3001/goals/addGoal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456',
                },
                body: JSON.stringify(action.payload)
            }).catch(error => console.log(error));
        },
        initAddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            console.log(action.payload);
            state.value = state.value.filter((goal) => goal.name !== action.payload.name);
            fetch ('http://localhost:3001/goals/deleteGoal/' + action.payload.key, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456',
                },
            }).catch(error => console.log(error));
        }
    }
});

export const { addGoal, initAddGoal, removeGoal } = goalSlice.actions;
export const selectGoals = (state) => state.goals.value;

export default goalSlice.reducer;