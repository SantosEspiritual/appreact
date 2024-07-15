import React from 'react';
import './ItemLista.css';

export default function ItemLista(props) {
    return (
        <div className="boxSigno">
            <p className="nomeSigno">
                {props.signo}
            </p>
            <p>
                Nascidos entre: {props.dataInicio} - {props.dataFim}
            </p>
        </div>
    );
};
