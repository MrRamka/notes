import { CardType, ColumnType } from '../../types';
import {
    AddNewCardAction,
    AddNewColumnAction,
    UpdateCardAction,
    UpdateCardColumnAction,
    UpdateColumnListAction,
} from './actions';
import { ListActionType } from './types';

type ColumnsStore = {
    list: ColumnType[];
}

const initialState: ColumnsStore = {
    list: [
        {
            id: '1',
            title: 'test',
            cards: [
                { id: 'a', title: 'aaa', description: 'asdasdas', columnId: '1' },
                { id: 'b', columnId: '1', title: 'aaa', description: 'asdasdas' },
            ],
        },
        {
            id: '2',
            title: 'test2',
            cards: [
                { id: 'c', title: 'aaa', columnId: '2' },
                { id: 'd', title: 'aaa', description: 'asdasdas', columnId: '2' },
                { id: 'e', title: 'aaa', columnId: '2' },
            ],
        },
        {
            id: '3',
            title: 'test2',
            cards: [
                { id: 'f', title: 'aaa', columnId: '3' },
                { id: 'g', title: 'aaa', description: 'asdasdas', columnId: '3' },
                { id: 'k', title: 'aaa', columnId: '3' },
            ],
        },
        {
            id: '4',
            title: 'test2',
            cards: [
                { id: 'l', title: 'aaa', columnId: '4' },
                { id: 'm', title: 'aaa', description: 'asdasdas', columnId: '4' },
                { id: 'n', title: 'aaa', columnId: '4' },
            ],
        },
    ],
};

export const listReducer = (
    state = initialState,
    action: UpdateColumnListAction |
        AddNewColumnAction |
        AddNewCardAction |
        UpdateCardAction |
        UpdateCardColumnAction,
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
                    console.log(column.cards);
                    const cards = column.cards.filter(card => card.id !== action.payload.card.id);
                    console.log(cards);
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
        default:
            return state;
    }
};
