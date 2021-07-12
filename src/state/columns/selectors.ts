import {RootState} from "state";

export const selectColumns = (state: RootState) => state.column.columns
export const selectColumnsAddMode = (state: RootState) => state.column.addMode
export const selectColumnsIsLoading = (state: RootState) => state.column.isLoading

