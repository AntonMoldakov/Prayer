import {RootState} from "state";
import {useMemo} from "react";
import {ICard} from "interface";

export const selectCards = (state: RootState) => state.card.cards
export const selectCardsIsLoading = (state: RootState) => state.card.isLoading

export const selectCardById = (id: number) => (state: RootState) => useMemo(
	() => state.card.cards.filter((item: ICard) => item.id === id),
	[state.card.cards, id],
)[0]

export const selectCardsForColumn = (id: number) => (state: RootState) => useMemo(
	() => state.card.cards.filter(card => card.columnId === id),
	[state.card.cards, id])
