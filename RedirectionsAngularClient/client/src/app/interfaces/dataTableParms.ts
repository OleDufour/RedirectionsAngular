import { RedirectModel } from './redirectModel';

export interface DataTableParms {
    columns: RedirectModel[],
    start: number,
    length: number,
    searchValue: string,
    domainId: number,
    includeDeletions: boolean
}

 