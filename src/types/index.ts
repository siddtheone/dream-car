export type Make = string;

export type Model = string;

export type Vehicle = {
  make: string;
  model: string;
  enginePowerPS: number;
  enginePowerKW: number;
  fuelType: string;
  bodyType: string;
  engineCapacity: number;
};
