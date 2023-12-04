
import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";


const useFetchHealth = () => {
    return useQuery<string, AxiosError>("health", () =>
    axios.get(`/api/health/GetHealth`).then((resp) => resp.data)
  );
};

export {
  useFetchHealth
};

