import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { DeviceDTO } from "../types/device";
import Problem from "../types/problem";
import {  message } from 'antd';


const useFetchDevices = () => {
  return useQuery<DeviceDTO[], AxiosError>("Devices", () =>
    axios.get(`/api/v1/Device/GetDevices`).then((resp) => resp.data)
  );
};

const useFetchDevice = (id: number) => {
  return useQuery<DeviceDTO, AxiosError>(["Devices", id], () =>
    axios.get(`/api/v1/Device/${id}`).then((resp) => resp.data)
  );
};

const useAddDevice = () => {
  const queryDevice = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, DeviceDTO>(
    (h) => axios.post(`/api/v1/Device/AddDevice`, h),
    {
      onSuccess: () => {
        queryDevice.invalidateQueries("Devices");
        nav("/");
      },
    }
  );
};

const useUpdateDevice = () => {
  const queryDevice = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, DeviceDTO>(
    (h) => axios.put(`/api/v1/Device/UpdateDevice`, h),
    {
      onSuccess: (_, Device) => {
        message.success(`Added ${Device.name} to Device list`);
        queryDevice.invalidateQueries("Devices");
        nav(`/Device/${Device.id}`);
      },
    }
  );
};

const useDeleteDevice = () => {
  const queryDevice = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError, DeviceDTO>(
    (h) => axios.delete(`/api/v1/Device/${h.id}`),
    {
      onSuccess: () => {
        queryDevice.invalidateQueries("Devices");
        nav("/");
      },
    }
  );
};

export {
  useAddDevice, useDeleteDevice, useFetchDevice, useFetchDevices, useUpdateDevice
};

