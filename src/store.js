import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/todoSlice";
import goalReducer from "./Reducers/goalsSlice";
import logger from "./Middleware/logger";
import checker from "./Middleware/checker";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        goals: goalReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, checker),
});

export default store;