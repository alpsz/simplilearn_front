import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import VideoDetail from './VideoDetail';

class CourseDetail extends React.Component{
    
    render() {
        const { courses } = this.props;
        const courseId = this.props.match.params.courseId;
        const currentCourse = courses.allCourses.find(c => c.id == courseId);
        return (
            <Container>
            <div style={{marginTop: 60}}>
                <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail videos={currentCourse.videoLink} />
                    </div>
                </div>
                </div>
            </div>
        </Container>
        );
    };
  };
  
  function mapStateToProps(state) {
      return {
          courses: state.courses
      }
  }

  export default connect(mapStateToProps)(CourseDetail);