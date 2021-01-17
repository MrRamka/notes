import { Action } from 'redux';
import { ColumnType } from '../../types';
import { ListActionType } from './types';

export interface UpdateColumnListAction extends Action<ListActionType.ADD_NEW_COLUMN> {
    payload: ColumnType
}

export const updateColumnsList = (column: ColumnType): UpdateColumnListAction => ({
    payload: column,
    type: ListActionType.ADD_NEW_COLUMN,
});

