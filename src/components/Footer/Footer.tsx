import React, { CSSProperties, FC } from 'react';
import { AdBlock } from '../AdBlock';

const styles: CSSProperties = {
    marginTop: '0.5rem',
    padding: '0.5rem',
    backgroundColor: 'rgb(235, 195, 64)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
};


export const Footer: FC = () => {
    return (
        <div style={styles}>
            <div>
                <AdBlock />
            </div>
        </div>
    );
};
