import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        goalsList: []
    },
    reducers: {
        addGoal: (state, action) => {
            state.goalsList.push({
                id: Math.floor(Math.random() * 10000),
                name: action.payload.name,
                isDone: false
            })
        },
        changeGoalStatus: (state, action) => {
            const goal = state.goalsList.find(goal => goal.id === action.payload.id)
            goal.isDone = !goal.isDone;
        }
    }
})

export const { addGoal, changeGoalStatus } = goalsSlice.actions;

export default goalsSlice.reducer