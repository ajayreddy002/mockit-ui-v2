export interface TableColumn {
    field: string;
    header: string;
}
export interface APIResponse {
    status: string;
    message?: string;
    res: any;
}