import axios, { AxiosError, AxiosResponse } from "axios";
import {  message } from 'antd';

const  DeviceService = {}

DeviceService.add = function (data) {
	return axios.post("/api/v1/device/AddDevice", data)
						.then((response) => {
							message.success(`Added ${data.name} to Device list`);
							return response;
						})						
						.catch((err) => {
							message.error(err);
						});	
}

DeviceService.update = function (data) {
	return axios.put("/api/v1/device/UpdateDevice", data)
						.then((response) => {							
							message.success(`Updated ${data.name} in Device list`);
							return response;
						})						
						.catch((err) => {
							message.error(err);
						});	
}

DeviceService.delete = function (id, name) {
	return axios.get(`/api/v1/device/DeleteDevice?id=${id}`)
						.then((response) => {
							message.success(`Deleted Device ${name} from Device list`);
							return response;
						})						
						.catch((err) => {
							message.error(err);
						});	
}


export default DeviceService;