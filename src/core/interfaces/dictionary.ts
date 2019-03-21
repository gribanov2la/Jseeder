export interface IDictionary {
    alphabet: string;
}

export interface IDictionaryHash {
    [key: string]: IDictionary;
}
