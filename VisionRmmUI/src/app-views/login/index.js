import React from 'react'
import { Card, Row, Col } from "antd";
import { useSelector } from 'react-redux';
import './login.css';


const Login = props => {
	
	return (
		
		<div className="login">
			<div className="container d-flex flex-column justify-content-center h-100">			
				 <Row justify="center">				
					<Col xs={20} sm={20} md={20} lg={7}>
						<Card>
							<div className="my-4">
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
									<a href="/account/login">Login</a>
									</Col>
								</Row>
							</div>
						</Card>
					</Col>
				</Row> 
			</div>
    	</div>
		
	)
}

export default Login;
