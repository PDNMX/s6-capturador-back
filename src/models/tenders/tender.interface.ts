interface IAmendments {
  id: string;
  date: string;
  rationale: string;
  description: string;
  amendsReleaseID: string;
  releaseID: string;
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

interface IClarificationMeetings {
  id: string;
  date: string;
  attendees: [
    {
      id: number;
      name: string;
    }
  ];
  officials: [
    {
      id: number;
      name: string;
    }
  ];
}

interface IItems {
  id: string;
  description: string;
  classification: {
    id: string;
    schema: string;
    description: string;
    // unit: string;
    uri: string;
  };
  additionalClassifications: [
    {
      id: string;
      schema: string;
      description: string;
      // unit: string;
      uri: string;
    }
  ];
  quantity: number;
  unit: {
    name: string;
    value: {
      amount: number;
      amountNet: number;
      currency: string;
    };
  };
}

export interface ITender {
  title: string;
  description: string;
  status: string;
  procuringEntity: {
    id: string;
    name: string;
  };
  value: {
    amount: number;
    currency: string;
  };
  minValue: {
    amount: number;
    currency: string;
  };
  procurementMethod: string;
  procurementMethodDetails: string;
  procurementMethodRationale: string;
  mainProcurementCategory: string;
  additionalProcurementCategories: Array<string>;
  awardCriteria: string;
  awardCriteriaDetails: string;
  submissionMethod: Array<string>;
  submissionMethodDetails: string;
  tenderPeriod: {
    startDate: string;
    endDate: string;
    maxExtentDate: string;
    durationInDays: number;
  };
  enquiryPeriod: {
    startDate: string;
    endDate: string;
    maxExtentDate: string;
    durationInDays: number;
  };
  hasEnquiries: boolean;
  awardPeriod: {
    startDate: string;
    endDate: string;
    maxExtentDate: string;
    durationInDays: number;
  };
  contractPeriod: {
    startDate: string;
    endDate: string;
    maxExtentDate: string;
    durationInDays: number;
  };
  eligibilityCriteria: string;
  numberOfTenderers: number;
  items: Array<IItems>;
  clarificationMeetings: Array<IClarificationMeetings>;
  tenderers: [{ id: number; name: string }];
  documents: [IDocuments];
  milestones: [IMilestone];
  amendments: [IAmendments];
}
