export const APIURLS = {
    login: () => '/signin',
    signup: () => '/signup',
    addCourse: () => '/addCourse',
    boughtCourses: (userId) => `/boughtCourses/${userId}`
}