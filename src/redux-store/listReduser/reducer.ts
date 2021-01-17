import { ColumnType } from '../../types';
import { UpdateColumnListAction } from './actions';

type ColumnsStore = {
    list: ColumnType[];
}

const initialState: ColumnsStore = {
    list: [
        { id: '1', title: 'test', cards: [{ id: 'a', title: 'aaa', description: 'asdasdas'}, { id: 'ag', title: 'aaa' , description: 'asdasdas'}] },
        { id: '2', title: 'test2', cards: [{ id: 'a4444', title: 'aaa' }, { id: 'asdfa', title: 'aaa', description: 'asdasdas' }, { id: 'fa', title: 'aaa' }, ] },
        { id: '3', title: 'test2', cards: [{ id: 'a234', title: 'aaa' }, { id: 'asdfa', title: 'aaa', description: 'asdasdas' }, { id: 'fsfda', title: 'aaa' }, ] },
        { id: '4', title: 'test2', cards: [{ id: 'a234', title: 'aaa' }, { id: 'asfa', title: 'aaa', description: 'asdasdas' }, { id: 'fsdfa', title: 'aaa' }, ] },
        { id: '5', title: 'test32', cards: [{ id: 'a234', title: 'aaa' }, { id: '33aa', title: 'aaa', description: 'asdasdas' }, { id: 'fsdfa', title: 'aaa' }, ] },
        { id: '6', title: 'test223', cards: [{ id: 'a4', title: 'aaa' }, { id: 'asdfa', title: 'aaa', description: 'asdasdas' }, { id: 'fsdfa', title: 'aaa' }, ] },
        { id: '7', title: 'test232', cards: [{ id: 'a33', title: 'aaa' }, { id: 'asdfa', title: 'aaa', description: 'asdasdas' }, { id: 'fsdfa', title: 'aaa' }, ] },
    ],
};

export const listReducer = (state = initialState, action: UpdateColumnListAction): ColumnsStore => {
    switch (action.type) {
        default:
            return state;
    }
};
