import React, { FC } from 'react';
import { Column } from '../Column';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux-store';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(10),
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(42),
                height: theme.spacing(16),
            },
        },
    }),
);

export const NotesContainer: FC = () => {

    const classes = useStyles();

    const columns = useSelector(selectors.list.columnList);

    return (
        <div className={classes.root}>
            {
                columns.map(column => (<Column key={column.id} cards={column.cards} title={column.title} />))
            }
        </div>
    );
};
