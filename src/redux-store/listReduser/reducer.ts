import { ColumnType } from '../../types';
import { AddNewCardAction, AddNewColumnAction, UpdateColumnListAction } from './actions';
import { ListActionType } from './types';

type ColumnsStore = {
    list: ColumnType[];
}

const initialState: ColumnsStore = {
    list: [
        {
            id: '1',
            title: 'test',
            cards: [{ id: 'a', title: 'aaa', description: 'asdasdas' }, {
                id: 'ag',
                title: 'aaa',
                description: 'asdasdas',
            }],
        },
        {
            id: '2',
            title: 'test2',
            cards: [{ id: 'a4444', title: 'aaa' }, { id: 'asdfa', title: 'aaa', description: 'asdasdas' }, {
                id: 'fa',
                title: 'aaa',
            }],
        },
        {
            id: '3',
            title: 'test2',
            cards: [{ id: 'a234', title: 'aaa' }, { id: 'asdfa', title: 'aaa', description: 'asdasdas' }, {
                id: 'fsfda',
                title: 'aaa',
            }],
        },
        {
            id: '4',
            title: 'test2',
            cards: [{ id: 'a234', title: 'aaa' }, { id: 'asfa', title: 'aaa', description: 'asdasdas' }, {
                id: 'fsdfa',
                title: 'aaa',
            }],
        },
    ],
};

export const listReducer = (state = initialState, action: UpdateColumnListAction | AddNewColumnAction | AddNewCardAction): ColumnsStore => {
    switch (action.type) {
        case ListActionType.ADD_NEW_COLUMN:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        case ListActionType.ADD_NEW_CARD:
            const newList = state.list.map(column => {
                if (column.id === action.payload.columnId) {
                    const newCards = [...column.cards, action.payload.card];
                    return { ...column, cards: newCards };
                }
                return column;
            });
            return {
                ...state,
                list: newList,
            };
        default:
            return state;
    }
};
