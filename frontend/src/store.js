import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/todoSlice";
import goalReducer from "./Reducers/goalsSlice";
import optionReducer from "./Reducers/optionSlice";
import logger from "./Middleware/logger";
import checker from "./Middleware/checker";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        goals: goalReducer,
        option: optionReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, checker),
});

export default store;