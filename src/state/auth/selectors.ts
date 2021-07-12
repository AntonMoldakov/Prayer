import {RootState} from "state";

export const selectUser = (state: RootState) => state.auth.user
export const selectAuthError = (state: RootState) => state.auth.error
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading
