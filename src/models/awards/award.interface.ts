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
  }[],
}
