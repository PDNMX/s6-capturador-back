interface IBudget {
  id: string;
  description: string;
  value: {
    amount: string;
    currency: string;
  };
  project: string;
  projectID: string;
  uri: string;
  budgetBreakdown: [
    {
      id: string;
      description: string;
      amount: {
        amount: string;
        currency: string;
      };
      uri: string;
      period: {
        startDate: string;
        endDate: string;
        durationInDays: string;
        maxExtentDate: string;
      };
      budgetLines: [
        {
          id: string;
          origin: string;
          components: [
            {
              name: string;
              level: string;
              code: string;
              description: string;
            }
          ];
        }
      ];
      sourceParty: {
        name: string;
        id: string;
      };
    }
  ];
}

interface IBudgetBreakdown {
  id: string;
  description: string;
  amount: {
    amount: string;
    currency: string;
  };
  uri: string;
  period: {
    startDate: string;
    endDate: string;
    durationInDays: string;
    maxExtentDate: string;
  };
  budgetLines: {
    id: string;
    origin: string;
    components: {
      name: string;
      level: string;
      code: string;
      description: string;
    }[];
  }[];
  sourceParty: {
    name: string;
    id: string;
  };
}

interface IDocuments {
  id: string;
  documentType: string;
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  format: string;
  languaje: string;
}

interface IMilestone {
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

interface IItems {
  id: string;
  description: string;
  classification: {
    id: string;
    scheme: string;
    description: string;
    uri: string;
  };
  additionalClassifications: {
    id: string;
    scheme: string;
    description: string;
    uri: string;
  }[];
  quantity: string;
  unit: {
    scheme: string;
    id: string;
    name: string;
    value: {
      currency: string;
      amount: string;
    };
    uri: string;
  };
}

interface IRequestForQuotes {
  id: string;
  title: string;
  description: string;
  period: {
    startDate: string;
    endDate: string;
    durationInDays: string;
    maxExtentDate: string;
  };
  items: [IItems];
  inviteSuppliers: [
    {
      name: string;
      id: string;
    }
  ];
  quotes: [
    {
      id: string;
      descripition: string;
      date: string;
      items: [IItems];
      value: {
        amount: string;
        currency: string;
      };
      period: {
        startDate: string;
        endDate: string;
        durationInDays: string;
        maxExtentDate: string;
      };
      issuingSupplier: {
        name: string;
        id: string;
      };
    }
  ];
}

export interface IPlanning {
  //   id: string;
  rationale: string;
  hasQuotes: boolean;
  requestingUnits: [{ id: string; name: string }];
  responsibleUnits: [{ id: string; name: string }];
  contractingUnits: [{ id: string; name: string }];
  requestForQuotes: [IRequestForQuotes];
  budget: [IBudget];
  documents: [IDocuments];
  milestones: [IMilestone];
}
