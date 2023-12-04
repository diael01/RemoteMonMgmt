import { DeleteOutlined, EyeOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, Menu, Table, message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientService from "../../../services/client";
import EllipsisDropdown from '../../../components/shared-components/EllipsisDropdown';
import Flex from '../../../components/shared-components/Flex';
import { useFetchClientsAndSites } from "../../../hooks/ClientHooks";
import useFetchUser from "../../../hooks/UserHooks";
import utils from '../../../utils';
import axios, { AxiosError, AxiosResponse } from "axios";




export const ClientDashboard = () => {
	const navigate = useNavigate();
  	const { data, status, isSuccess } = useFetchClientsAndSites();
  	const { data: userClaims } = useFetchUser();
  	const [list, setList] = useState(data); 
	const [selectedRows, setSelectedRows] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);


	const dropdownMenu = row => (
		<Menu>
			<Menu.Item onClick={() => viewDetails(row)}>
				<Flex alignItems="center">
					<EyeOutlined />
					<span className="ml-2">View/Edit Details</span>
				</Flex>
			</Menu.Item>
			<Menu.Item onClick={() => deleteRow(row)}>
				<Flex alignItems="center">
					<DeleteOutlined />
					<span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);
	
	const addClient = () => {
		//todo: map only id and clients name
		navigate(`/app-views/dashboards/client/addClient`)
	}
	
	const viewDetails = row => {
		navigate(`/app-views/dashboards/client/editClient/${row.id}`)
	}
	
	const deleteRow = async row => {
		const objKey = 'id';
		let data1 = list;
		if(selectedRows.length > 1) 
		{
			selectedRows.forEach(async elm => {				
				await ClientService.delete(elm.id, elm.name);				
				data1 = utils.deleteArrayRow(data1, objKey, elm.id);
				setList(data1);
				setSelectedRows([]);				
			})
		} 
		else 
		{			
			await ClientService.delete(row.id, row.name);				
			data1 = utils.deleteArrayRow(data1, objKey, row.id);	
			setList(data1);
			setSelectedRows([]);		
		}
		
	}

	const tableColumns = [
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'Client',
			dataIndex: 'name',			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
		},
		{
			title: 'Address',
			dataIndex: 'address',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ip')
		},
		{
			title: 'Wan Ip',
			dataIndex: 'ip',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ip')
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ip')
		},
		{
			title: 'Email',
			dataIndex: 'email',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ip')
		},		
		{
			title: 'Contact',
			dataIndex: 'contact',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ip')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};


	return (
		
		<Card>	    
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>				
				<div>
				<Button onClick={addClient} type="primary" icon={<PlusCircleOutlined />} block>Add client/site</Button>
				</div>				
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={data} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default ClientDashboard;

