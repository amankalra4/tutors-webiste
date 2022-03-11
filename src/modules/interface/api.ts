export interface getReferenceIDInterface {
    refs: Ref[];
}

export interface Ref {
    id: string;
    ref: string;
    label: string;
    isMasterRef: boolean;
}
