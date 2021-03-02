import { CardType } from '../../types';

export type CardModalTypes = {
    card: CardType
    columnId: string
    onCancel: () => void;
    cardTitle: string,
    setCardTitle: (title: string) => void;
    cardDescription: string
    setCardDescription: (desc: string) => void;
}
