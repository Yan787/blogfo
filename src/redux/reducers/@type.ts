import { CardListType } from "../../utils/@globalTypes";

export type PayloadWithCallback<Data> = {
    data: Data;
    callback: () => void;
}

export type UserPayloadData = {
    username: string;
    email: string;
    password: string;
}

export type ActivateUserData = {
    uid: string;
    token: string;
}


export type SignInUserData = {
    email: string;
    password: string;
}

export type SignUpUserPauload = PayloadWithCallback<UserPayloadData>
export type ActivateUserPayload = PayloadWithCallback<ActivateUserData>
export type SignInUserPayload = PayloadWithCallback<SignInUserData>

export type GetAllPostsPayload = {
    ordering?: string
    search?: string
    offset: number
}
export type SetAllPostPayload = {
    cardList: CardListType,
    postsCount: number,
}