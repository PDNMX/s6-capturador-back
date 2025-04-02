export interface IAddress {
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  countryName: string;
}

export interface IInstitution {
  id?: string;
  name: string;
  address: IAddress;
}
