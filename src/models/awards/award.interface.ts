export interface IAward {
  id: number;
  status: string;
  title: string;
  description: string;
  rationale: string;
  date: Date;
  value: {
    amount: number;
    currency: string;
  };
  contractPeriod: {
    startDate: Date;
    endDate: Date;
    maxExtentDate: Date;
    durationInDays: number;
  };
  suppliers: {
    name: string;
    id: string;
  }[];
  items: {
    id: string;
    description: string;
    classification: {
      id: string;
      description: string;
      scheme: string;
      uri: string;
    };
    additionalClassifications: {
      scheme: string;
      id: string;
      description: string;
      uri: string;
    }[];
    quantity: number;
    unit: {
      scheme: string;
      id: string;
      name: string;
      value: {
        amount: number;
        currency: string;
      };
      uri: string;
    };
  }[];
}
