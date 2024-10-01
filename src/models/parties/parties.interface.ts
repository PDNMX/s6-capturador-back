interface IBeneficialOwners {
  name: string;

  identifier: {
    scheme: string;
    id: string;
  };

  nationality: string;
  email: string;
  telephone: string;
  faxNumber: string;
  address: {
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    countryName: string;
  };
}

interface IAdditionalContactPoints {
  type: string;
  name: string;
  givenName: string;
  patronymicName: string;
  matronymicName: string;
  email: string;
  telephone: string;
  faxNumber: string;
  url: string;
  availableLanguage: [string];
}

export interface IParties {
  id: string;

  name: string;
  position: string;
  roles: [string];

  memberOf: [
    {
      id: String;
      name: String;
    }
  ];

  identifier: {
    legalPersonality: string;
    schema: string;
    id: string;
    uri: string;
    legalName: string;
    givenName: string;
    patronymicName: string;
    matronymicName: string;
  };

  additionalIdentifiers: [
    {
      schema: string;
      id: string;
      uri: string;
      legalName: string;
    }
  ];

  details: {
    listedOnRegulatedMarket: boolean;
  };

  address: {
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    countryName: string;
  };

  contactPoint: {
    type: string;
    name: string;
    givenName: string;
    patronymicName: string;
    matronymicName: string;
    email: string;
    telephone: string;
    faxNumber: string;
    url: string;
    availableLanguage: [string];
  };

  additionalContactPoints: [IAdditionalContactPoints];

  beneficialOwners: [IBeneficialOwners];
}
