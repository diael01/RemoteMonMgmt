import { Button, Form, Tabs, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import PageHeaderAlt from '../../../../components/layout-components/PageHeaderAlt';
import Flex from '../../../../components/shared-components/Flex';
import { useFetchClientsAndSites } from '../../../../hooks/ClientHooks';
import ClientService from "../../../../services/client";
import ClientField from './ClientField';


const ADD = 'ADD'
const EDIT = 'EDIT'

const ClientForm = props => {
	const nav = useNavigate();
	const { data, status, isSuccess } = useFetchClientsAndSites();
    const [ClientListData, setClientListData] = useState(data); 
	const [OnlyClientListData, setOnlyClientListData] = useState(data); 
	const { mode = ADD, param } = props

	const [form] = Form.useForm();
	const [submitLoading, setSubmitLoading] = useState(false)
	const [idd, setIdd] = useState();

	useEffect(() => {		
    	if(mode === EDIT) {
			console.log('is edit')			
			const { id } = param			
			const clientData = ClientListData.filter( client => client.id === parseInt(id))
			setOnlyClientListData(ClientListData.filter( client => client.mainId == null));
			const client = clientData[0];				
			
			form.setFieldsValue({
				id:client.id,
				name: client.name,
				mainId: client.mainId,
				billAddress: client.billAddress,
				mailAddress: client.mailAddress,
				ip: client.ip,
				phone: client.phone,
				email: client.email,
				companyNo: client.companyNo,
				vat: client.vat,
				primaryContact: client.primaryContact,
				secContact: client.secContact
			});	
			setIdd(client.mainId);			
		}
  	}, [form, mode, param, props]);
	

	const onDiscard = () => {
		form.setFieldsValue({
			name:"",
			billAddress: "",
			mailAddress: "",
			ip: "",
			phone: "",
			email: "",
			primaryContact: "",
			secContact: "",
			companyNo: "",
			vat: "",	
			mainId: 0		
		});			
	}

	const onFinish = () => {
		setSubmitLoading(true)
		form.validateFields().then(values => {
			setTimeout(async () => {
				setSubmitLoading(false)				
				if(mode === ADD) {					
					await ClientService.add(values);										
				}
				if(mode === EDIT) {
					await ClientService.update(values);	
					form.setFieldsValue({
						id:values.id,
						name: values.name,
						billAddress: values.billAddress,
						mailAddress: values.mailAddress,
						ip: values.ip,
						phone: values.phone,
						email: values.email,
						companyNo: values.companyNo,
						vat: values.vat,
						primaryContact: values.primaryContact,
						secContact: values.secContact,
						mainId: values.mainId
					});			
				}
			}, 1500);
		}).catch(info => {
			setSubmitLoading(false)
			console.log('info', info)
			message.error('Please enter all required fields ');
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
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Client/Site' : `Edit Client/Site`} </h2>
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
								label: 'Client',
								key: '1',
								children: <ClientField  param={OnlyClientListData} form = {form} idd={idd}/>
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default ClientForm