import { DeleteOutlined, EyeOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, Menu, Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeviceService from "../../../services/device";
import EllipsisDropdown from '../../../components/shared-components/EllipsisDropdown';
import Flex from '../../../components/shared-components/Flex';
import { useFetchDevices } from "../../../hooks/DeviceHooks";
import useFetchUser from "../../../hooks/UserHooks";
import utils from '../../../utils';


export const DeviceDashboard = () => {
	const navigate = useNavigate();
  	const { data, status, isSuccess } = useFetchDevices();
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
	
	const addDevice = () => {
		navigate(`/app-views/dashboards/device/addDevice`)
	}
	
	const viewDetails = row => {
		navigate(`/app-views/dashboards/device/editDevice/${row.id}`)
	}
	
	const deleteRow = async row => {
		const objKey = 'id'
		let data1 = list
		if(selectedRows.length > 1) {
			selectedRows.forEach(async elm => {
				await DeviceService.delete(elm.id, elm.name);				
				data1 = utils.deleteArrayRow(data1, objKey, elm.id)	
				setList(data1);	
				setSelectedRows([]);						
			})
		} else {
			await DeviceService.delete(row.id, row.name);	
			data1 = utils.deleteArrayRow(data1, objKey, row.id)	
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
			title: 'Device',
			dataIndex: 'name',			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
		},		
		{
			title: 'Ip',
			dataIndex: 'ip',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ip')
		},
		{
			title: 'Reachable',
			dataIndex: 'reachable',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'reachable')
		},
		{
			title: 'Client ID',
			dataIndex: 'clientId',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'clientId')
		},
		{
			title: 'Status',
			dataIndex: 'status',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'status')
		},		
		{
			title: 'Type',
			dataIndex: 'type',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'type')
		},
        {
			title: 'PatchStatus',
			dataIndex: 'patchStatus',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'patchStatus')
		},
        {
			title: 'AlertStatus',
			dataIndex: 'alertStatus',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'alertStatus')
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
				<Button onClick={addDevice} type="primary" icon={<PlusCircleOutlined />} block>Add Device</Button>
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

export default DeviceDashboard;

