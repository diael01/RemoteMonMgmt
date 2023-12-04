import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { ClientDTO } from "../types/client";
import Problem from "../types/problem";
import {  message } from 'antd';


const useFetchClientsAndSites = () => {
  return useQuery<ClientDTO[], AxiosError>("clients", () =>
    axios.get(`/api/v1/client/GetClientsAndSites`).then((resp) => resp.data)
  );
};

const useFetchClients = () => {
  return useQuery<ClientDTO[], AxiosError>("clients", () =>
    axios.get(`/api/v1/client/GetClients`).then((resp) => resp.data)
  );
};

const useFetchClient = (id: number) => {
  return useQuery<ClientDTO, AxiosError>(["clients", id], () =>
    axios.get(`/api/v1/client/${id}`).then((resp) => resp.data)
  );
};

const useAddClient = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, ClientDTO>(
    (h) => axios.post(`/api/v1/client/AddClient`, h),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("clients");
        nav("/");
      },
    }
  );
};

const useUpdateClient = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, ClientDTO>(
    (h) => axios.put(`/api/v1/client/UpdateClient`, h),
    {
      onSuccess: (_, client) => {
        message.success(`Added ${client.name} to client list`);
        queryClient.invalidateQueries("clients");
        nav(`/client/${client.id}`);
      },
    }
  );
};

const useDeleteClient = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError, ClientDTO>(
    (h) => axios.delete(`/api/v1/client/${h.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("clients");
        nav("/");
      },
    }
  );
};

export {
  useAddClient, useDeleteClient, useFetchClient, useFetchClientsAndSites, useUpdateClient
};

