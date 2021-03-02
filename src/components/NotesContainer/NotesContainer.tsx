import React, { CSSProperties, FC } from 'react';
import { Column } from '../Column';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux-store';
import { AddNewColumn } from '../AddNewColumn';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


export const NotesContainer: FC = () => {

    const columns = useSelector(selectors.list.columnList);

    const styles: CSSProperties = {
        display: 'flex'
    }

    return (
        <div>
            <div style={styles}>
                <DndProvider backend={HTML5Backend}>
                    {
                        columns.map(column => (<Column key={column.id} column={column} />))
                    }
                </DndProvider>
                <AddNewColumn />
            </div>
        </div>
    );
};
