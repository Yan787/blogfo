import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../components/Card";
import { RootState } from "../store";

type initialType = {
	selectedPost: CardType | null,
	isVisibleSelectedModal:  boolean,
}

const initialState: initialType = {
	selectedPost: null,
	isVisibleSelectedModal: false,
};

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setSelectedPost: (state, action: PayloadAction<CardType | null>)=> {
			state.selectedPost = action.payload;
		},
        setPostVisible: (state, action: PayloadAction<boolean>)=> {
            state.isVisibleSelectedModal = action.payload
        }
		
	},
});

export const { setSelectedPost, setPostVisible } = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
    getSelectionPost: (state: RootState)=> state.post.selectedPost,
    getVisibleSelectedModal: (state: RootState)=> state.post.isVisibleSelectedModal
}