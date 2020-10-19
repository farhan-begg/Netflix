import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
    // locks body and display spinner logo
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
        </Spinner>
    );
}

// releases the body puts background to normal
Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
};