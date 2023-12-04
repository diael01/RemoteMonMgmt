import axios, { AxiosError, AxiosResponse } from "axios";
import {  message } from 'antd';

const  ClientService = {}

ClientService.add = function (data) {
	return axios.post("/api/v1/client/AddClient", data)
						.then((response) => {
							message.success(`Added ${data.name} to client list`);
							return response;
						})						
						.catch((err) => {
							message.error(err);
						});	
}

ClientService.update = function (data) {
	return axios.put("/api/v1/client/UpdateClient", data)
						.then((response) => {							
							message.success(`Updated ${data.name} in client list`);
							return response;
						})						
						.catch((err) => {
							message.error(err);
						});	
}

ClientService.delete = function (id, name) {
	return axios.get(`/api/v1/client/DeleteClient?id=${id}`)
						.then((response) => {
							console.log("client deleted");
							message.success(`Deleted client ${name} from client list`);
							return response;
						})						
						.catch((err) => {
							console.log("delete err"+err);
							message.error(err);
						});	
}

export default ClientService;