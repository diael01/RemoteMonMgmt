import { Card, Col, Form, Input, Row, Select, Checkbox } from 'antd';
import { changeConfirmLocale } from 'antd/es/modal/locale';
import React, { useState } from 'react';


const rules = {
	name: [
		{
			required: true,
			message: 'Please enter client name',
		}
	],
	vat: [
		{
			required: false,
			message: 'Please enter client VAT',
		}
	],
	companyNo: [
		{
			required: false,
			message: 'Please enter client company No',
		}
	],
	mailAddress: [
		{
			required: false,
			message: 'Please enter client mailing Address',
		}
	],
	billAddress: [
		{
			required: false,
			message: 'Please enter client billing Address',
		}
	],
	ip: [
		{
			required: true,
			message: 'Please enter client ip',
		}
	],	
	phone: [		
		{
			required: false,
			message: 'Please enter client phone',
		}
	],
	email: [		
		{
			required: false,
			message: 'Please enter client email',
		}
	],
    primaryContact: [		
		{
			required: false,
			message: 'Please enter client primary Contact',
		}
	]
}



const ClientField = props => {
	const { param, form, idd } = props;		
	const { Option } = Select;	
		
	console.log("idd="+idd);	
	const ch = idd>0 ? true:false;
	const [checked, setChecked] = useState(true);	
	//setChecked(true);	
	console.log("checked="+checked);			
 	const [mainId, setMainId] = useState();	
	
	 const onChange = (e) => {
		console.log('checked = ', e.target.checked);
		setChecked(e.target.checked);	
	  };
	
	const handleOnChange = (value, event) => {       
		setMainId(event.key);		
		form.setFields([{name:"mainId", value:event.key}]);	
    }	

	return (	
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card>
				<Form.Item name="name" label="Client/Site name" rules={rules.name}>
					<Input placeholder="Client/Site Name" />
				</Form.Item>
				<Row>
					<Col xs={12} sm={12} md={8}>
					
						<Form.Item name="isSite" label="Is a Site" valuePropName="checked">
						<Checkbox checked={true} onChange={onChange}/>               
						</Form.Item>
					</Col>
					<Col xs={12} sm={12} md={9}>
						<Form.Item name="clients" label="Choose Client" readonly="true" hidden={!checked}>
							<Select style={{minWidth: 70}}  onSelect={(value, event) => handleOnChange(value, event)}>
								{
									param.map(client => <Option key={client.id} value={client.name}></Option>)
								}																															
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item name="ip" label="Wan Ip" rules={rules.ip}>
					<Input placeholder="Wan Ip" />
				</Form.Item>
				<Form.Item name="companyNo" label="Company No" hidden={checked} rules={rules.companyNo}>
					<Input placeholder="Company No"/>
				</Form.Item>
				<Form.Item name="vat" label="VAT" hidden={checked} rules={rules.vat}>
					<Input placeholder="VAT"/>
				</Form.Item>
				<Form.Item name="mailAddress" label="Mail Address" rules={rules.mailAddress}>
					<Input.TextArea rows={2} />
				</Form.Item>
				<Form.Item name="billAddress" label="Billing Address" rules={rules.billAddress}>
					<Input.TextArea rows={2} />
				</Form.Item>                
                <Form.Item name="phone" label="Phone" rules={rules.phone}>
					<Input placeholder="Phone"/>
				</Form.Item>
                <Form.Item name="email" label="Email" rules={rules.email}>
					<Input placeholder="Email" />
				</Form.Item>
                <Form.Item name="primaryContact" label="Primary Contact" rules={rules.primaryContact}>
					<Input placeholder="Primary Contact" />
				</Form.Item>   
				<Form.Item name="secContact" label="Secondary Contact" rules={rules.secContact}>
					<Input placeholder="Secondary Contact" />
				</Form.Item>   
				<Form.Item name="id" hidden="true">					
				</Form.Item> 
				<Form.Item name="mainId" hidden="true" >	
					<Input value={mainId}/>				
				</Form.Item>          
			</Card>
			
		</Col>		
	</Row>
)
}


export default ClientField
