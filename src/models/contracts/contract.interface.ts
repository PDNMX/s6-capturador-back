interface IAmendments {
  id: string;
  date: string;
  rationale: string;
  description: string;
  amendsReleaseID: string;
  releaseID: string;
}

interface IRelatedProcesses {
  id: string;
  relationship: [string];
  title: string;
  scheme: string;
  identifier: string;
  uri: string;
}

interface IMilestones {
  id: string;
  title: string;
  type: string;
  description: string;
  code: string;
  dueDate: string;
  dateMet: string;
  dateModified: string;
  status: string;
}

interface ITransactions {
  id: string;
  source: string;
  date: string;
  paymentMethod: string;
  value: {
    amount: string;
    currency: string;
  };
  payer: {
    id: string;
    name: string;
  };
  payee: {
    id: string;
    name: string;
  };
  uri: string;
}

interface IDocuments {
  id: string;
  documentType: string;
  title: string;
  description: string;
  uri: string;
  datePublished: string;
  dateModified: string;
  format: string;
  language: string;
}

interface IGuarantees {
  id: string;
  type: string;
  date: string;
  obligations: string;
  value: {
    amount: string;
    currency: string;
  };
  guarantor: {
    id: string;
    name: string;
  };
  period: {
    startDate: string;
    endDate: string;
    durationInDays: string;
    maxExtentDate: string;
  };
}

interface IItems {
  id: string;
  description: string;
  classification: {
    scheme: string;
    id: string;
    uri: string;
    description: string;
  };

  additionalClassifications: [
    {
      scheme: string;
      id: string;
      uri: string;
      description: string;
    }
  ];

  quantity: number;
  unit: {
    scheme: string;
    id: string;
    name: string;
    uri: string;
    value: {
      amount: number;
      currency: string;
    };
  };
}

export interface IContract {
  id: string;
  awardID: string;
  title: string;
  description: string;
  status: string;

  period: {
    startDate: string;
    endDate: string;
    durationInDays: string;
    maxExtentDate: string;
  };

  value: {
    amount: string;
    amountNet: string;
    currency: string;
    exchangeRates: [
      {
        rate: number;
        currency: string;
        date: string;
        source: string;
      }
    ];
  };

  items: [IItems];

  dateSigned: string;
  surveillanceMechanisms: [string];
  guarantees: [IGuarantees];
  documents: [IDocuments];

  implementation: {
    status: string;
    transactions: [ITransactions];
    milestones: [IMilestones];
    documents: [IDocuments];
  };

  relatedProcesses: [IRelatedProcesses];
  milestones: [IMilestones];
  amendments: [IAmendments];
}
