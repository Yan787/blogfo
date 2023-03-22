import { CardType } from "../../utils/@globalTypes";

export type AllPostsRosponse = {
    count: number;
    next: string;
    previous: string;
    results: CardType[];
}