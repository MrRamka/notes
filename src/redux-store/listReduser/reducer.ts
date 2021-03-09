import { CardType, ColumnType } from '../../types';
import { ListActionType } from './types';
import { AnyAction } from 'redux';

type ColumnsStore = {
    list: ColumnType[];
}

const initialState: ColumnsStore = {
    list: [],
};

export const listReducer = (
    state = initialState,
    action: AnyAction,
): ColumnsStore => {
    switch (action.type) {
        case ListActionType.ADD_NEW_COLUMN:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        case ListActionType.ADD_NEW_CARD:
            const newList = state.list.map(column => {
                if (column.id === action.payload.columnId) {
                    const newCards = [...column.cards, action.payload];
                    return { ...column, cards: newCards };
                }
                return column;
            });
            return {
                ...state,
                list: newList,
            };
        case ListActionType.UPDATE_CARD:
            const newCards = state.list.map(column => {
                //find column
                if (column.id === action.payload.columnId) {
                    //find card
                    const cards = column.cards.map(card => {
                        if (card.id === action.payload.id) {
                            const newCard: CardType = {
                                id: card.id,
                                columnId: card.columnId,
                                title: action.payload.title,
                                description: action.payload.description,
                            };
                            return newCard;
                        }
                        return card;
                    });
                    return { ...column, cards: cards };
                }
                return column;
            });
            return {
                ...state,
                list: newCards,
            };
        case ListActionType.UPDATE_CARD_COLUMN:
            const prevColumnId = action.payload.card.columnId;
            const columns = state.list.map(column => {
                if (column.id === prevColumnId) {
                    const cards = column.cards.filter(card => card.id !== action.payload.card.id);
                    return { ...column, cards: cards };
                }

                if (column.id === action.payload.columnId) {
                    const changedCard = action.payload.card;
                    changedCard.columnId = action.payload.columnId;
                    const cards = [...column.cards, changedCard];
                    return { ...column, cards: cards };
                }
                return column;
            });
            return {
                ...state,
                list: columns,
            };
        case ListActionType.DELETE_COLUMN:
            const filteredColumns = state.list.filter(column => column.id !== action.payload);
            return {
                ...state,
                list: filteredColumns,
            };

        case ListActionType.DELETE_CARD:
            const columnsFiltered = state.list.map(column => {
                const cards = column.cards.filter(card => card.id !== action.payload);
                return {
                    ...column,
                    cards: cards,
                };
            });
            return {
                ...state,
                list: columnsFiltered,
            };
        default:
            return state;
    }
};
