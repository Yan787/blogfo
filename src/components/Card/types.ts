export type CardType = {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
} 

export enum CardSize {
    Large,
    Medium,
    Small,
}

export type CardProps = {
    Card: CardType,
    Size: CardSize,
}