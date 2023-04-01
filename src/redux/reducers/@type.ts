// export type PayloadWithCallback<Data> = {
//     data: Data;
//     callback: () => void;
// }

// export type UserPayloadData = {
    // username: string;
    // email: string;
    // password: string;
// }

// export type ActivateUserData = {
//     uid: string;
//     token: string;
// }


// export type SignUpUserPauload = PayloadWithCallback<UserPayloadData>
// export type ActivateUserPayload = PayloadWithCallback<ActivateUserData>





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
