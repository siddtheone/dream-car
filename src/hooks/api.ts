import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";
import { Make, Model, Vehicle } from "types";
import { apiClinet } from "utils/api-client";

const queryFn = async (path: string, config?: AxiosRequestConfig) => {
  const { data } = await apiClinet.get(path, config);
  return data;
};

export const useGetMakes = () =>
  useQuery<Make[]>("makes", () => queryFn("makes"));

export const useGetModels = (make: string) =>
  useQuery<Model[]>(
    ["models", make],
    () => queryFn("models", { params: { make } }),
    {
      enabled: !!make,
    }
  );

export const useGetVehicles = ({
  make,
  model,
}: {
  make: string;
  model: string;
}) =>
  useQuery<Vehicle[]>(
    ["vehicles", make, model],
    () => queryFn("vehicles", { params: { make, model } }),
    {
      enabled: !!make && !!model,
    }
  );
