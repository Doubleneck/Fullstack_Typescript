export type Diagnose = 'code' | 'name' | 'latin' ;
export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}