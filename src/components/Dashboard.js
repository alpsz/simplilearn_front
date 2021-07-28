import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../assets/css/dashboard.css';


class Dashboard extends React.Component {
    render () {
        return (
            <>
                <Container>
                    <Row style={{ marginTop: '150px' }}>
                        <h1 className="dashboard-header-text">Explorer courses</h1>
                        <p className="dashboard-header-desc">Learning is the end-less journey. Choose your course and start to sharpening your skill.  </p>
                    </Row>
                    <div className="row">
                        <div className="card">
                            <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/nodeexpress.png" />
                            <div className="card-body">
                                <h2>Node.js Crash Course</h2>
                                <p>Node.js complete crash course from beginners to andvanced. This course covers all about Node.js and its relevent framework.</p>
                                <button className="custom-btn">Buy Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://hackr.io/blog/best-java-courses/thumbnail/large" />
                            <div className="card-body">
                                <h2>Node.js Crash Course</h2>
                                <p>Node.js complete crash course from beginners to andvanced. This course covers all about Node.js and its relevent framework.</p>
                                <button className="custom-btn">Buy Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://programmerhope.com/wp-content/uploads/2019/03/laravel-devepomnt.png" />
                            <div className="card-body">
                                <h2>Node.js Crash Course</h2>
                                <p>Node.js complete crash course from beginners to andvanced. This course covers all about Node.js and its relevent framework.</p>
                                <button className="custom-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src="https://senelda.com/wp-content/uploads/2017/10/ph.png" />
                            <div className="card-body">
                                <h2>Node.js Crash Course</h2>
                                <p>Node.js complete crash course from beginners to andvanced. This course covers all about Node.js and its relevent framework.</p>
                                <button className="custom-btn">Buy Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://i.ytimg.com/vi/5KtRF4NuUWE/maxresdefault.jpg" />
                            <div className="card-body">
                                <h2>Node.js Crash Course</h2>
                                <p>Node.js complete crash course from beginners to andvanced. This course covers all about Node.js and its relevent framework.</p>
                                <button className="custom-btn">Buy Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://sathyatech.com/wp-content/uploads/2018/06/Amazon-AWS-1.png" />
                            <div className="card-body">
                                <h2>Node.js Crash Course</h2>
                                <p>Node.js complete crash course from beginners to andvanced. This course covers all about Node.js and its relevent framework.</p>
                                <button className="custom-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                        
                </Container>  
            </>
        );
    }
}

export default Dashboard;