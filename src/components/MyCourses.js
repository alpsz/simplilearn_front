import React from 'react';
import { Container, Row } from 'react-bootstrap';


class MyCourses extends React.Component {
    render () {
        return (
            <>
                <Container>
                    <Row style={{ marginTop: '150px' }}>
                        <h1>My courses component.</h1>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MyCourses;