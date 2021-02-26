import React, { FC } from 'react';
import { Column } from '../Column';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux-store';
import { AddNewColumn } from '../AddNewColumn';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            //marginTop: theme.spacing(10),
            //height: '100%',

        },
        wrapper: {
            marginTop: theme.spacing(10),
            display: 'flex',
            //backgroundColor: 'aqua',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(42),
            },
        },
    }),
);

export const NotesContainer: FC = () => {

    const classes = useStyles();

    const columns = useSelector(selectors.list.columnList);

    return (
        <div style={{}}>
            <div style={{
                display: 'flex',
            }}>
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
