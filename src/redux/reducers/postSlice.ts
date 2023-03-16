import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Card, { CardType } from "../../components/Card";
import { RootState } from "../store";

export enum LikeStatus {
	Like = "like",
	DisLike = "disLike",
}

type initialType = {
	selectedPost: CardType | null,
	isVisibleSelectedModal:  boolean,
	likedPost: CardType[],
	disLikedPost: CardType[],
	savedPosts: CardType[],
}
const initialState: initialType = {
	selectedPost: null,
	isVisibleSelectedModal: false,
	likedPost: [],
	disLikedPost: [],
	savedPosts: [],
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
        },
		setStatus: (state, action: PayloadAction<{status: LikeStatus, card: CardType}>)=>{
			const {status, card} = action.payload

			const likedIndex = state.likedPost.findIndex((post)=> post.id=== card.id)
			const dislikedIndex = state.disLikedPost.findIndex((post)=> post.id=== card.id)

			const isLike = status === LikeStatus.Like

			const mainKey = isLike ? "likedPost" : "disLikedPost"
			const secondaryKey = isLike ? "disLikedPost" : "likedPost"

			 const mainIndex = isLike ? likedIndex : dislikedIndex
			 const secondaryIndex = isLike ? dislikedIndex : likedIndex

			 if(mainIndex === -1) {
				state[mainKey].push(card)
			 } else {
				state[mainKey].splice(mainIndex ,1)
			 }
			 if(secondaryIndex > -1) {
				state[secondaryKey].splice(secondaryIndex ,1)
			 }
			},
			setBookmarkStatus: (state, action: PayloadAction<CardType>)=> {
				const savedPostsIndex = state.savedPosts.findIndex((post)=> post.id === action.payload.id)

				if(savedPostsIndex === -1) {
					state.savedPosts.push(action.payload)
				} else {
					state.savedPosts.splice(savedPostsIndex, 1)
				}
			} 
	},
});

export const { setSelectedPost, setPostVisible, setStatus, setBookmarkStatus } = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
    getSelectionPost: (state: RootState)=> state.post.selectedPost,
    getVisibleSelectedModal: (state: RootState)=> state.post.isVisibleSelectedModal,
	getLikedPost: (state: RootState)=> state.post.likedPost,
	getDislikedPost: (state: RootState)=> state.post.disLikedPost,
	getBookmarkStatus: (state: RootState)=> state.post.savedPosts
}