import React from 'react';
import Flat from './flat';
import flats from '../../data/flats';

function FlatList(props) {
    return (
        <div className="flat-list">
            {flats.map((flat) => <Flat flat={flat} key={flat.id} selectFlatFxn={props.selectFlatFxn} selected={props.selectedFlat.id === flat.id} />)}
        </div>
    );
}

export default FlatList;