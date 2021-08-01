import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../assets/css/dashboard.css';


class Dashboard extends React.Component {
    render () {
        const { courses, boughtCourses, isLoggedin } = this.props;
        return (
            <>
                <Container>
                    <Row style={{ marginTop: '150px' }}>
                        <h1 className="dashboard-header-text">SimpliLearn courses</h1>
                        <p className="dashboard-header-desc">Learning is the end-less journey. Choose your course and start sharpening your skill.  </p>
                    </Row>

                    {courses && courses.length === 0 && (
                        <div>No courses found!</div>
                    )}
                    <ul className="cards">
                    {courses && courses.map((course) => {
                        var isBought = false;
                        if(boughtCourses.indexOf(course.id) !== -1){
                            isBought = true;
                        }
                        return (
                            <li className="cards_item" key={course.id}>
                                <div className="card">
                                    <div className="card_image">
                                        <img src={course.thumbnailURL} />
                                    </div>
                                    <div className="card_content">
                                            <h2 className="card_title">{course.title}{isBought ? "(Bought)": ""}</h2>
                                            <div className="price-section">
                                                <div className="price">Price: ₹{course.price}</div>
                                                {isLoggedin ? isBought ? 
                                                <button className="btn card_btn"><Link style={{color:"white"}} to={{
                                                    pathname: `/courseDetail/${course.id}`,
                                                }}>view Videos</Link></button>
                                                :
                                                <button className="btn card_btn"><Link 
                                                    to={{
                                                        pathname: `/paymentCard/${course.id}`,
                                                    }} 
                                                    style={{color:"white"}}>Buy Now</Link></button>
                                                    : <button className="btn card_btn"><Link to="/login" style={{color:"white"}}>Buy Now</Link></button>}
                                            </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                </Container>  
            </>
        );
    }
}

export default Dashboard;