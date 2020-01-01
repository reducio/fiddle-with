import React, { useCallback } from 'react';
import AuthorizationForm from '../AuthorizationForm';
import useFetch from '../../../hooks/useFetch';
import api from '../../../api';

const AuthorizationPage = props => {
    const handleSubmit = useCallback(options => {
        return api.post('/login', options);
    });

    const handleSubmitSuccess = useCallback(() => {
        props.history.push('/home');
    });

    const [state, trigger] = useFetch(handleSubmit);

    return (
        <AuthorizationForm
            fetching={state.fetching}
            onSubmit={trigger}
            onSubmitSuccess={handleSubmitSuccess}
        />
    )
}

export default AuthorizationPage;