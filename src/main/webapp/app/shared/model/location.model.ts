import { ICountry } from 'app/shared/model/country.model';

export interface ILocation {
  id?: number;
  locationName?: string;
  country?: ICountry;
}

export const defaultValue: Readonly<ILocation> = {};
