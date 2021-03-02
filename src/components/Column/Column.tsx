import React, { FC, useCallback, useContext, useState } from 'react';
import { ColumnPaper } from './styles';
import { CardType, ColumnType } from '../../types';
import { Card } from '../Card';
import { ThemeContext } from '../../theme-context';
import { ThemeTypography } from '../ThemeTypography';
import { AddCard } from '../AddCard';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { deleteColumn, updateCardColumn } from '../../redux-store/listReduser/actions';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteConfirmModal } from '../DeleteConfirmModal';

type Props = {
    column: ColumnType,
}

export const Column: FC<Props> = (props) => {

    const { id, title, cards } = props.column;

    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    const themeContext = useContext(ThemeContext);
    const [, drop] = useDrop({
        accept: '1',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop: (item, monitor) => {
            const card = monitor.getItem() as CardType;
            if (card.columnId === id) {
                return;
            }
            dispatch(updateCardColumn({ card, columnId: id }));
            return undefined;
        },
    });

    const handleDeleteColumn = useCallback(() => {
        setDeleteModalOpen(true);
    }, []);

    const handleCancelDelete = useCallback(() => {
        setDeleteModalOpen(false);
    }, []);

    const onDeleteModal = useCallback(() => {
        dispatch(deleteColumn(id));
    }, [dispatch, id]);

    return (
        <>
            <div style={{ margin: '0 1rem', width: 300, flexShrink: 0 }} ref={drop}>
                <ColumnPaper elevation={3} style={{ backgroundColor: themeContext.theme.column }}>
                    <ThemeTypography styles={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{title}</ThemeTypography>
                    <DeleteIcon onClick={handleDeleteColumn} />
                    {cards.map(card => (
                        <Card key={card.id} card={card} columnId={id} />),
                    )}

                    <AddCard columnId={id} />
                </ColumnPaper>
            </div>
            {deleteModalOpen &&
            <DeleteConfirmModal onOk={onDeleteModal} onCancel={handleCancelDelete}  setIsOpen={setDeleteModalOpen}>
                <ThemeTypography>Do you wont delete column {title}?</ThemeTypography>
            </DeleteConfirmModal>}
        </>
    );
};
