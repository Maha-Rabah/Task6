import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import coursesSlice from "./slices/courses.slice";
import teacherSlice from "./slices/teacher.slice";

const reducers = {
  reducer: {
    courses: coursesSlice,
    teachers: teacherSlice,
  },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;
