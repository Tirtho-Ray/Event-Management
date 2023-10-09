import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowPlace from './ShowPlace';

const Place = () => {
    const place = useLoaderData();
    return (
        <div>
            <ShowPlace place={place}></ShowPlace>
        </div>
    );
};

export default Place;