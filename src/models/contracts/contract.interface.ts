export interface IContract {
  _id?: any;
   id?: any;
  awardID?: any;
  title?: any;
  description?: any;
  status?: any;
  surveillanceMechanisms?:[any];
  period?: {
    startDate: any;
    endDate: any;
    durationInDays: any;
    maxExtentDate: any;
  };
  value?: {
    amount: any;
    amountNet: any;
    currency: any;
  };
  dateSignedContracts?: {
    dateSigned: any;
  };
  Items?: {
    id: any;
    description: any;
    classification: {
      scheme: any;
      id: any;
      description: any;
    };
    quantity: number;
    unit: {
      name: any;
      value: {
        amount: number;
        currency: any;
      };
    };
    deliveryLocation: {
      latitude: any;
      longitude: any;
    };
  };
  documents?: {
    id: any;
    documentType: any;
    title: any;
    description: any;
    url: any;
    datePublished: any;
  };
  guarantees?: {
    id: any;
    description: any;
    amount: number;
    currency: any;
    dateFrom: any;
    dateTo: any;
  };
  relatedProcesses?: {
    id: any;
    relationship: any;
    title: any;
  };
  amendments?: {
    id: any;
    date: any;
    rationale: any;
    amendsReleaseID: any;
    releaseID: any;
  };
  milestones?: {
    id: any;
    title: any;
    description: any;
    dueDate: any;
    dateMet: any;
  };
  
}