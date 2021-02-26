import React, { FC, useCallback, useContext, useRef, useState } from 'react';
import { CardContent, createStyles, makeStyles, Theme } from '@material-ui/core';
import { CardType, ColumnType } from '../../types';
import { Card as ThemedCard, CardTitle } from './styles';
import { CardModal } from '../CardModal';
import { ThemeContext } from '../../theme-context';
import { CardProps } from './types';
import { ThemeTypography } from '../ThemeTypography';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateCardColumn } from '../../redux-store/listReduser/actions';
import { Simulate } from 'react-dom/test-utils';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginBottom: theme.spacing(1),
            maxHeight: 70,
        },
        title: {
            fontWeight: 'bold',
            display: 'block',
        },
    }),
);


/**
 *  Render single card
 * @param card { CardType } Card
 * @param columnId
 */
export const Card: FC<CardProps> = ({ card, columnId }) => {

    const classes = useStyles();
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState<boolean>(false);


    const [, drag] = useDrag({
        item: {...card, type: '1'},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    const handleCardClick = useCallback(() => {
        setModalOpen(!modalOpen);
    }, [modalOpen]);

    //todo: render description 100 symbols
    return (
        <>
            <ThemedCard className={classes.card} onClick={handleCardClick} themeColor={theme.theme.card}
                        style={{ cursor: 'pointer' }} ref={drag}>
                <CardContent>
                    <CardTitle className={classes.title}>{card.title}</CardTitle>
                    <ThemeTypography>{card.description}</ThemeTypography>
                </CardContent>
            </ThemedCard>
            {modalOpen && <CardModal card={card} columnId={columnId} />}
        </>
    );
};
