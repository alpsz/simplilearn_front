import React from 'react';
import Cards from 'react-credit-cards';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'react-credit-cards/es/styles-compiled.css';
import '../assets/css/paymentcard.css';


class PaymentCard extends React.Component {
    state = {
        number: '',
        name: '',
        month: '',
        expiry: '',
        cvc: '',
        focus: ''
    }
    

    handleDate = (e) => {
        this.setState({ month: e.target.value });
        this.setState({ expiry: e.target.value });
    };

    handleExpiry = (e) =>{
        this.setState({ expiry: this.state.month.concat(e.target.value) });
    }

    render () {
        const courseId = this.props.match.params.courseId;
        const { number, name, expiry, cvc, focus } = this.state;
        return (
            <Container>
                <div style={{ marginTop: '150px' }}>
                    <div className="row" style={{ textAlign: 'center' }}>
                        <h1 className="dashboard-header-text">Payment information</h1>
                        <p className="dashboard-header-desc">Provide credit/debit card details for make payment secure and easy.</p>
                    </div>
                    <div className="rccs__card rccs__card--unknown">
                        <Cards
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focus}
                        />
                    </div>
                    <br />

                    <form>
                        <div className="row">
                            <div className="col-sm-11">
                                <label htmlFor="name">Card Number</label>
                                <input
                                type="tel"
                                className="form-control"
                                value={number}
                                name="number"
                                maxLength="16"
                                pattern="[0-9]+"
                                onChange={(e) => {
                                    this.setState({ number: e.target.value })
                                }}
                                onFocus={(e) => this.setState({ focus: e.target.name })}
                                ></input>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-11">
                                <label htmlFor="name">Card Name</label>
                                <input
                                type="text"
                                className="form-control"
                                value={name}
                                name="name"
                                onChange={(e) => {
                                    this.setState({ name: e.target.value })
                                }}
                                onFocus={(e) => this.setState({ focus: e.target.name })}
                                ></input>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-8">
                                <label htmlFor="month">Expiration Date</label>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="cvv">CVV</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <select
                                className="form-control"
                                name="expiry"
                                onChange={this.handleDate}
                                >
                                <option value=" ">Month</option>
                                <option value="01">Jan</option>
                                <option value="02">Feb</option>
                                <option value="03">Mar</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">Aug</option>
                                <option value="09">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                                </select>
                            </div>
                        
                            <div className="col-sm-4">
                                <select
                                className="form-control"
                                name="expiry"
                                onChange={this.handleExpiry}
                                >
                                <option value=" ">Year</option>
                                <option value="21">2021</option>
                                <option value="22">2022</option>
                                <option value="23">2023</option>
                                <option value="24">2024</option>
                                <option value="25">2025</option>
                                <option value="26">2026</option>
                                <option value="27">2027</option>
                                <option value="28">2028</option>
                                <option value="29">2029</option>
                                <option value="30">2030</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <input
                                type="tel"
                                name="cvc"
                                maxLength="3"
                                className=" form-control"
                                value={cvc}
                                pattern="\d*"
                                onChange={(e) => {
                                    this.setState({ cvc: e.target.value })
                                }}
                                onFocus={(e) => this.setState({ focus: e.target.name })}
                                />
                            </div>
                        </div>
                        <br />
                        <Link to={{
                                    pathname: `/Verifyotp/${courseId}`,
                                }} className="custom-pay-btn form-control">Pay Now</Link>
                    </form>
                </div>
            </Container>
        );
    }
}

export default PaymentCard;