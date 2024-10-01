export interface IContract {
  id: string;
  status: string;
  awardID: string;
  title: string;
  description: string;
  surveillanceMechanisms: string;
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
  };
  dateSignedContracts: {
    dateSigned: string;
  };
}