import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { CardContent, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Card as ThemedCard, CardTitle } from './styles';
import { CardModal } from '../CardModal';
import { ThemeContext } from '../../theme-context';
import { CardProps } from './types';
import { ThemeTypography } from '../ThemeTypography';
import { useDrag } from 'react-dnd';
import ClearIcon from '@material-ui/icons/Clear';
import { deleteCard } from '../../redux-store/listReduser/actions';
import { useDispatch } from 'react-redux';
import { DeleteConfirmModal } from '../DeleteConfirmModal';
import { EditModalConfirm } from '../EditModalConfirm';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginBottom: theme.spacing(1),
        },
        title: {
            fontWeight: 'bold',
            display: 'block',
        },
    }),
);

const DESCRIPTION_ELLIPSIS_LENGTH: number = 40;

/**
 *  Render single card
 * @param card { CardType } Card
 * @param columnId
 */
export const Card: FC<CardProps> = ({ card, columnId }) => {

    const classes = useStyles();
    const theme = useContext(ThemeContext);

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

    const [isChangedData, setIsChangedData] = useState<boolean>(false);


    const [cardTitle, setCardTitle] = useState<string>(card.title);
    const [cardDescription, setCardDescription] = useState<string>(card.description || '');

    const dispatch = useDispatch();

    const shortDescriptionValue = (card.description?.length ?? 0) > DESCRIPTION_ELLIPSIS_LENGTH ?
        card.description?.substring(0, DESCRIPTION_ELLIPSIS_LENGTH) + '...' :
        card.description;

    useEffect(() => {
        if (cardTitle !== card.title || cardDescription !== card.description) {
            setIsChangedData(true);
        } else {
            setIsChangedData(false);
        }
    }, [cardTitle, card, cardDescription]);

    const [, drag] = useDrag({
        item: { ...card, type: '1' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    const handleCardClick = useCallback(() => {
        setModalOpen(!modalOpen);
    }, [modalOpen]);

    const handleDeleteCard = useCallback((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();
        setDeleteModalOpen(true);
    }, []);

    const handleCancelDelete = useCallback(() => {
        setDeleteModalOpen(false);
    }, []);


    const onDeleteModal = useCallback(() => {
        dispatch(deleteCard(card.id));
    }, [dispatch, card]);

    const handleCancelEdit = useCallback(() => {
        setEditModalOpen(false);
        setModalOpen(true);
    }, []);

    const handleOkEdit = useCallback(() => {
        setEditModalOpen(true);
    }, []);

    const handleCancelOpen = useCallback(() => {
        setModalOpen(false);
        if (isChangedData){
            setEditModalOpen(true);
        }
    }, [isChangedData]);

    return (
        <>
            <ThemedCard className={classes.card} onClick={handleCardClick} themecolor={theme.theme.card}
                        style={{ cursor: 'pointer' }} ref={drag}>
                <ClearIcon onClick={handleDeleteCard} />
                <CardContent style={{ width: 240 }}>
                    <CardTitle className={classes.title}>{card.title}</CardTitle>
                    <ThemeTypography styles={{ wordBreak: 'break-all' }}>{shortDescriptionValue}</ThemeTypography>
                </CardContent>
            </ThemedCard>
            {modalOpen && !deleteModalOpen &&
            <CardModal
                card={card}
                columnId={columnId}
                onCancel={handleCancelOpen}
                cardDescription={cardDescription}
                cardTitle={cardTitle}
                setCardDescription={setCardDescription}
                setCardTitle={setCardTitle}
            />
            }
            {deleteModalOpen &&
            <DeleteConfirmModal onOk={onDeleteModal} onCancel={handleCancelDelete} setIsOpen={setDeleteModalOpen}>
                <ThemeTypography>Do you wont delete card {card.title}?</ThemeTypography>
            </DeleteConfirmModal>}
            {editModalOpen &&
            <EditModalConfirm onCancel={handleCancelEdit} setIsOpen={setEditModalOpen} onOk={handleOkEdit}>
                <ThemeTypography>You sure cancel changes?</ThemeTypography>
            </EditModalConfirm>
            }
        </>
    );
};
