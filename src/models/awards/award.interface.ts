export interface IAward {
  id: string;
  status: string;
  title: string;
  description: string;
  rationale: string;
  date: string;
  value: {
    amount: string;
    currency: string;
  };
  contractPeriod: {
    startDate: string;
    endDate: string;
    maxExtentDate: string;
    durationInDays: string;
  };
}
