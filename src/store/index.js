// Codes By Mahdi Tasha
// Importing Part
import { createSlice, configureStore} from "@reduxjs/toolkit";

// Variables
let isDayOrNot;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Saturday", 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const date = new Date();
const hour = date.getHours();

// Some Conditions
(18 > hour > 0) ? isDayOrNot = true : isDayOrNot = false

// Creating Slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        date: {
            day: date.getDate(),
            monthName: monthNames[date.getMonth()],
            dayOfWeek: dayNames[date.getDay()],
            isDay: isDayOrNot
        },
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                name: action.payload,
                isImportant: false,
                isDone: false
            })
        },
        removeTodo() {},
        addImportant() {},
        removeImportant() {}
    }
})

// Using Actions
export const actions = todoSlice.actions;

// Creating Store (CDS)
const store = configureStore({reducer: todoSlice.reducer});
export default store;