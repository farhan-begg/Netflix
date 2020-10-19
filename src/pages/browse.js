import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
    // displays series content
    const { series } = useContent('series');
    // displays film content
    const { films } = useContent('films');
    // slides
    const slides = selectionFilter({ series, films });

    return <BrowseContainer slides={slides} />;
}