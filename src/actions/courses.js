import api from '../api/courseApi';
import backendApi from '../api/backendApi';
import { APIURLS } from '../urls/urls';
import history from '../history';
import { FETCH_COURSES, ADD_COURSE, ADD_COURSE_FAILED, BOUGHT_COURSES,FETCH_BOUGHT_COURSES_FAILED } from './type';



export function fetchCourses() {
    return async (dispatch) => {
        const courses = await api.get();
        dispatch(populateCourses(courses.data));
    }
}


export function addCourse(courseId, userId) {
    return async (dispatch) => {
        const response = await backendApi.post(APIURLS.addCourse(), {courseId: courseId, userId: userId}, {'Content-Type': 'application/json'});
        if(response.data.success) {
            dispatch(populateBoughtCourses(response.data.courses));
            history.push('/mycourses');
        }
        dispatch(addCourseFailed(response.data.message));  
    }
}

export function boughtCourses(userId) {
    return async (dispatch) => {
        const response = await backendApi.get(APIURLS.boughtCourses(userId), {'Content-Type': 'application/json'});
        if(response.data.success) {
            dispatch(populateBoughtCourses(response.data.courses));
            return;
        }
        dispatch(FetchBoughtCoursesFalied(response.data.message));
    }
}


export function populateCourses(courses) {
    return {
        type: FETCH_COURSES,
        courses
    }
}

export function populateCourse(courseId) {
    return {
        type: ADD_COURSE,
        courseId
    }
}

export function populateBoughtCourses(boughtCourses) {
    return {
        type: BOUGHT_COURSES,
        boughtCourses
    }
}

export function addCourseFailed(error) {
    return {
        type: ADD_COURSE_FAILED,
        error: error
    }
}

export function FetchBoughtCoursesFalied(error) {
    return {
        type: FETCH_BOUGHT_COURSES_FAILED,
        error: error
    }
}