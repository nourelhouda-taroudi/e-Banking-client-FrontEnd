export interface AccountDetails {
    id:   string;
    balance:  number;
    rib:            number;
    code: number;
    createdAt?:Date;
    currentPage?:          number;
    totalPages?:           number;
    pageSize?:             number;
    accountOperationDTOS?: AccountOperation[];

  
  }
  
  export interface AccountOperation {
    id?:            number;
    operationDate: Date;
    amount:        number;
    type:          string;
    account_id: string

  }