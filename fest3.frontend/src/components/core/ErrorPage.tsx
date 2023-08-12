import React, { type ReactElement } from 'react';
import { useRouteError } from 'react-router-dom';

export function ErrorPage({ error }: { error?: Error } = {}): ReactElement {
    const _error = error ?? useRouteError() as Error

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p><i>{_error.message}</i></p>
            <p>
                <pre>{_error.stack}</pre>
            </p>
        </div>
    )
}