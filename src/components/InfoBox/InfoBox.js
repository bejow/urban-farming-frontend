import React from 'react';
import styles from './InfoBox.module.css';
import InfoBoxFrame from './InfoBoxFrame';

export default function InfoBox(props) {
    const {area, image, title, text, onClick} = props
    console.log(props)
    return (
        <InfoBoxFrame onClick={onClick} area={area} image={image}>
                <h1>{title}</h1>
                { text ? <p>{text}</p> : null}
        </InfoBoxFrame>
    )
}
