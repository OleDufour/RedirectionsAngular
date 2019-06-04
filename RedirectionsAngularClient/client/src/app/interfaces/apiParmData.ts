import { RedirectModel } from './redirectModel';

export class ApiParmData {
    redirectModel: RedirectModel
    pageNo: number
    pageSize: number
    recordsTotal: number
    sortDirection: string
    includeDeletions: boolean
}

