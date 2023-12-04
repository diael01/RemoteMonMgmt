import { Card, Col, Form, Input, Row, Checkbox } from 'antd';


const rules = {
	name: [
		{
			required: true,
			message: 'Please enter Device name',
		}
	],	
	ip: [
		{
			required: true,
			message: 'Please enter Device ip',
		}
	],		
	clientId: [		
		{
			required: true,
			message: 'Please enter Device clientId',
		}
	],
    type: [		
		{
			required: true,
			message: 'Please enter Device type',
		}
	]
}



const DeviceField = props => (
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card title="Basic Info">
				<Form.Item name="name" label="Device name" rules={rules.name}>
					<Input placeholder="Device Name" />
				</Form.Item>				
                <Form.Item name="ip" label="Device Ip" rules={rules.ip}>
					<Input placeholder="Device Ip" />
				</Form.Item>               
				<Form.Item name="clientId" label="Client Id" rules={rules.clientId}>
					<Input placeholder="Client Id"/>
				</Form.Item>               
                <Form.Item name="type" label="Type" rules={rules.type}>
					<Input.TextArea rows={2} />
				</Form.Item>  
				<Form.Item name="id" hidden="true">					
				</Form.Item>  		            
			</Card>
			
		</Col>		
	</Row>
)

export default DeviceField
