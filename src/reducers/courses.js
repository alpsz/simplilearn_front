import { ADD_COURSE, BOUGHT_COURSES, FETCH_COURSES, FETCH_BOUGHT_COURSES_FAILED, ADD_COURSE_FAILED } from '../actions/type';


const initialAuthState = {
    allCourses: null,
    boughtCourses: [],
    error: null
}

export default function courses (state = initialAuthState, action) {
    switch (action.type) {
        case ADD_COURSE: 
            return {...state, boughtCourses: [action.courseId, ...state.boughtCourses]}
        case FETCH_COURSES:
            return {...state, allCourses: action.courses};
        case BOUGHT_COURSES:
            return {...state, boughtCourses: action.boughtCourses};
        case ADD_COURSE_FAILED:
        case FETCH_BOUGHT_COURSES_FAILED:
            return {...state, error: action.error};
        default: 
            return state;
    };
};
