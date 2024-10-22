export type ResultContent = {
    interval: number;
    previousWin: number;
    followingWin: number;
    producer: string;

}

export type MinMax = {
    min: ResultContent;
    max: ResultContent
}

export type Result = {
    [key: string]: MinMax
}