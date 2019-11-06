import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './LoadingSpinnerStyles';

const LoadingSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay><SpinnerContainer /></SpinnerOverlay>
    ) : (
        <WrappedComponent { ...otherProps } />
    );
}

export default LoadingSpinner; //Este es un high order component