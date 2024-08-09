export interface IContract {
 contract:{
   id: string;
  awardID: string;
  title: string;
  description: string;
  status: string;
  surveillanceMechanisms:[string];
  period: {
    startDate: string;
    endDate: string;
    durationInDays: string;
    maxExtentDate: string;
  };
  value: {
    amount: number;
    amountNet: string;
    currency: string;
  };
  dateSignedContracts: {
    dateSigned: string;
  };
  Items: [{
    id: string;
    description: string;
    classification: {
      scheme: string;
      id: string;
      description: string;
    };
    quantity: number;
    unit: {
      name: string;
      value: {
        amount: number;
        currency: string;
      };
    };
    deliveryLocation: {
      latitude: string;
      longitude: string;
    };
  }];
  documents: {
    id: string;
    documentType: string;
    title: string;
    description: string;
    url: string;
    datePublished: string;
  };
  guarantees: {
    id: string;
    description: string;
    amount: number;
    currency: string;
    dateFrom: string;
    dateTo: string;
  };
  relatedProcesses: {
    id: string;
    relationship: string;
    title: string;
  };
  amendments: {
    id: string;
    date: string;
    rationale: string;
    amendsReleaseID: string;
    releaseID: string;
  };
  milestones: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    dateMet: string;
  };
}
  
}