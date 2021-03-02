import React, { FC, useCallback, useContext, useState } from 'react';
import { ColumnPaper, ColumnTitle, ColumnWrapper, HeaderWrapper, ThemeDeleteIcon } from './styles';
import { CardType, ColumnType } from '../../types';
import { Card } from '../Card';
import { ThemeContext } from '../../theme-context';
import { ThemeTypography } from '../ThemeTypography';
import { AddCard } from '../AddCard';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { deleteColumn, updateCardColumn } from '../../redux-store/listReduser/actions';
import { DeleteConfirmModal } from '../DeleteConfirmModal';
import { useTranslation } from 'react-i18next';

type Props = {
    column: ColumnType,
}

export const Column: FC<Props> = (props) => {

    const { id, title, cards } = props.column;
    const { t } = useTranslation();
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
            <ColumnWrapper ref={drop}>
                <ColumnPaper elevation={3} bgColor={themeContext.theme.column}>
                    <HeaderWrapper>
                        <ColumnTitle>{title}</ColumnTitle>
                        <div>
                            <ThemeDeleteIcon onClick={handleDeleteColumn} delete_color={themeContext.theme.error} />
                        </div>
                    </HeaderWrapper>
                    {cards.map(card => (
                        <Card key={card.id} card={card} columnId={id} />),
                    )}
                    <AddCard columnId={id} />
                </ColumnPaper>
            </ColumnWrapper>

            {deleteModalOpen &&
            <DeleteConfirmModal onOk={onDeleteModal} onCancel={handleCancelDelete} setIsOpen={setDeleteModalOpen}>
                <ThemeTypography>{t('deleteCardText')} {title}?</ThemeTypography>
            </DeleteConfirmModal>}
        </>
    );
};
