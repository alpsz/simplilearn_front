import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { boughtCourses } from '../actions/courses';
import '../assets/css/courses.css';

class MyCourses extends React.Component {

    componentDidMount() {
        const userId = this.props.auth.user._id;
        this.props.dispatch(boughtCourses(userId));
    }

    render () {
        const { allCourses, boughtCourses } = this.props.courses;
        return (
            <>
                <Container>
                    <Row style={{ marginTop: '150px' }}>
                            <h1 className="dashboard-header-text">SimpliLearn Classroom</h1>
                    </Row>

                    {
                        boughtCourses && boughtCourses.length === 0 && (
                            <div>OOPS!!! No courses found.</div>
                        )
                    }
                    {boughtCourses && boughtCourses.map((course) => {
                        
                        const currentCourse = allCourses.find(c => c.id === course);
                        const currentVideo = Math.ceil(Math.random() * currentCourse.videoLink.length);
                        return (
                            <div class="courses-container">
                                <div class="course">
                                    <div class="course-preview">
                                        <h6>Course</h6>
                                        <h4>{currentCourse.title}</h4>
                                    </div>
                                    <div class="course-info">
                                        <h6>Total Videos : {currentCourse.videoLink.length}</h6>
                                        <h2>Currently on: Video {currentVideo}</h2>
                                        <button class="course-btn"><Link style={{color:"white"}} to={{
                                    pathname: `/courseDetail/${currentCourse.id}`,
                                }}>Enter Course</Link></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Container>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        courses: state.courses
    }
}

export default connect(mapStateToProps)(MyCourses);