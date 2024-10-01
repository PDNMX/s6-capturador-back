interface IAwardDocument {
  id: string;
  documentType: string;
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified: Date;
  format: string;
  language: string;
}

interface IAwardAmendment {
  id: string;
  date: string;
  rationale: string;
  description: string;
  amendsReleaseID: string;
  releaseID: string;
}

interface IAwardSupplier {
  id: string;
  name: string;
}

interface IAwardItem {
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
    name: string;
    value: {
      amount: number;
      currency: string;
    };
  };
}

export interface IAward {
  id: string;
  status: string;
  title: string;
  description: string;
  rationale: string;
  date: string;
  value: {
    amount: number;
    currency: string;
  };
  contractPeriod: {
    startDate: string;
    endDate: string;
    maxExtentDate: string;
    durationInDays: number;
  };
  suppliers: IAwardSupplier[];
  items: IAwardItem[];
  documents: IAwardDocument[];
  amendments: IAwardAmendment[];
}