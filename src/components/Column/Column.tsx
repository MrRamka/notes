import React, { FC } from 'react';
import { ColumnPaper } from './styles';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { CardType } from '../../types';
import { Card } from '../Card';

type Props = {
    title: string;
    cards: CardType[];
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);


export const Column: FC<Props> = ({ title, cards }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ColumnPaper elevation={3}>
                <Typography variant='h6'>{title}</Typography>

                {cards.map(card => (
                    <Card key={card.id} card={card} />),
                )}
            </ColumnPaper>
        </div>
    );
};
