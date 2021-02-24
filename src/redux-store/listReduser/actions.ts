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


//todo: add type
export interface AddNewCardAction extends Action<ListActionType.ADD_NEW_CARD> {
    payload: { card: CardType, columnId: string};
}

export const addCard = (addCardType : { card: CardType, columnId: string}): AddNewCardAction => ({
    payload: addCardType,
    type: ListActionType.ADD_NEW_CARD,
});
