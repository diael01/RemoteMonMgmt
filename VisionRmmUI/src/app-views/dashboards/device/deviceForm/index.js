import { Button, Form, Tabs, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PageHeaderAlt from '../../../../components/layout-components/PageHeaderAlt';
import Flex from '../../../../components/shared-components/Flex';
import { useFetchDevices } from '../../../../hooks/DeviceHooks';
import DeviceService from "../../../../services/device";
import DeviceField from './DeviceField';

const ADD = 'ADD'
const EDIT = 'EDIT'

const DeviceForm = props => {
	const nav = useNavigate();
	const { data, status, isSuccess } = useFetchDevices();
    const [DeviceListData, setDeviceListData] = useState(data); 
	const { mode = ADD, param } = props

	const [form] = Form.useForm();
	const [submitLoading, setSubmitLoading] = useState(false)

	useEffect(() => {
    	if(mode === EDIT) {
			console.log('is edit')
			console.log('props', props)
			const { id } = param			
			const DeviceData = DeviceListData.filter( Device => Device.id === parseInt(id))
			const Device = DeviceData[0]
			form.setFieldsValue({
				id:Device.id,
				name: Device.name,				
				ip: Device.ip,				
				type: Device.type,				
				clientId: Device.clientId
			});			
		}
  	}, [form, mode, param, props]);
	

	const onDiscard = () => {
		form.setFieldsValue({
			name:"",			
			ip: "",			
			type: "",			
			clientId: 0			
		});			
	}

	const onFinish = () => {
		setSubmitLoading(true)
		form.validateFields().then(values => {
			setTimeout(async () => {
				setSubmitLoading(false)
				if(mode === ADD) {					
					await DeviceService.add(values);													
				}
				if(mode === EDIT) {					
					await DeviceService.update(values);	
					form.setFieldsValue({
						id:values.id,
						name: values.name,				
						ip: values.ip,												
						type: values.type,						
						clientId: values.clientId
					});		
				}
			}, 1500);
		}).catch(info => {
			setSubmitLoading(false);
			console.log('info', info);
			message.error('Please enter all required fields:'+info);
		});
	};

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={{
					heightUnit: 'cm',
					widthUnit: 'cm',
					weightUnit: 'kg'
				}}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Device' : `Edit Device`} </h2>
							<div className="mb-3">
								<Button className="mr-2" onClick={() => onDiscard()}>Discard</Button>
								<Button type="primary" onClick={() => onFinish()} htmlType="submit" loading={submitLoading} >
									{mode === 'ADD'? 'Add' : `Save`}
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs 
						defaultActiveKey="1" 
						style={{marginTop: 30}}
						items={[
							{
								label: 'Device',
								key: '1',
								children: <DeviceField/>,
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default DeviceForm