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

interface IRequestingUnits {
    id: string;
    name: string;
}

interface IResponsibleUnits {
    id: string;
    name: string;
}

interface IContractingUnits {
    id: string;
    name: string;
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
    items: {
        id: string;
        description: string;
        classification: {
            scheme: string;
            id: string;
            description: string;
            uri: string;
        };
        additionalClassifications: {
            scheme: string;
            id: string;
            description: string;
            uri: string;
        }[];
        quantity: string;
        unit: {
            scheme: string;
            id: string;
            name: string;
            value: {
                amount: string;
                currency: string;
            };
            uri: string;
        };
    }[];
    inviteSuppliers: {
        name: string;
        id: string;
    }[];
    quotes: {
        id: string;
        descripition: string;
        date: string;
        items: {
            id: string;
            description: string;
            classification: {
                scheme: string;
                id: string;
                description: string;
                uri: string;
            };
            additionalClassifications: {
                scheme: string;
                id: string;
                description: string;
                uri: string;
            }[];
            quantity: string;
            unit: {
                scheme: string;
                id: string;
                name: string;
                value: {
                    amount: string;
                    currency: string;
                };
                uri: string;
            };
        }        
    };
}

export interface IPlanning {
    id: string;
    rationale: string;
    hasQuotes: boolean;
    requestingUnits: Array<IRequestingUnits>;
    responsibleUnits: Array<IResponsibleUnits>;
    contractingUnits: Array<IContractingUnits>;
    requestForQuotes: Array<IRequestForQuotes>;
    budget: IBudgetBreakdown;
    documents:[IDocuments];
    milestones:[IMilestone];
    
}