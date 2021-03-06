import { Action } from 'redux';
import { CardType, ColumnType } from '../../types';
import { ListActionType } from './types';

export interface UpdateColumnListAction extends Action<ListActionType.ADD_NEW_COLUMN> {
    payload: ColumnType
}

export const updateColumnsList = (column: ColumnType): UpdateColumnListAction => ({
    payload: column,
    type: ListActionType.ADD_NEW_COLUMN,
});


export interface UpdateCardAction extends Action<ListActionType.UPDATE_CARD> {
    payload: CardType
}

export const updateCard = (card: CardType): UpdateCardAction => ({
    payload: card,
    type: ListActionType.UPDATE_CARD,
});

export interface AddNewColumnAction extends Action<ListActionType.ADD_NEW_COLUMN> {
    payload: ColumnType;
}

export const addColumn = (column: ColumnType): AddNewColumnAction => ({
    payload: column,
    type: ListActionType.ADD_NEW_COLUMN,
});


export interface AddNewCardAction extends Action<ListActionType.ADD_NEW_CARD> {
    payload: CardType;
}

export const addCard = (card: CardType): AddNewCardAction => ({
    payload: card,
    type: ListActionType.ADD_NEW_CARD,
});


export interface UpdateCardColumnAction extends Action<ListActionType.UPDATE_CARD_COLUMN> {
    payload: { card: CardType, columnId: string };
}

export const updateCardColumn = (updateCardColumnType: { card: CardType, columnId: string }): UpdateCardColumnAction => ({
    payload: updateCardColumnType,
    type: ListActionType.UPDATE_CARD_COLUMN,
});

export interface DeleteColumnAction extends Action<ListActionType.DELETE_COLUMN> {
    payload: string;
}

export const deleteColumn = (columnId: string): DeleteColumnAction => ({
    payload: columnId,
    type: ListActionType.DELETE_COLUMN,
});

export interface DeleteCardAction extends Action<ListActionType.DELETE_CARD> {
    payload: string;
}

export const deleteCard = (cardId: string): DeleteCardAction => ({
    payload: cardId,
    type: ListActionType.DELETE_CARD,
});
