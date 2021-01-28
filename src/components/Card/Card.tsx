import React, { FC, useCallback, useState } from 'react';
import { Card as MaterialCard, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { CardType } from '../../types';
import { CardModal } from '../CardModal';

type Props = {
    card: CardType;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginBottom: theme.spacing(1),
        },
        title: {
            marginBottom: theme.spacing(1),
        },
    }),
);


/**
 *  Render single card
 * @param card { CardType } Card
 */
export const Card: FC<Props> = ({ card }) => {

    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleCardClick = useCallback(() => {
        setModalOpen(!modalOpen)
    }, [modalOpen])

    //todo: render description 100 symbols
    return (
        <>
            <MaterialCard className={classes.card} onClick={handleCardClick}>
                <CardContent>
                    <Typography variant='subtitle1' className={classes.title}>{card.title}</Typography>
                    {card.description}
                </CardContent>
            </MaterialCard>
            {modalOpen && <CardModal setModalOpen={setModalOpen} card={card}/>}
        </>
    );
};
