import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './LoadingSpinner.styles';

const LoadingSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => (
    isLoading ? (
        <SpinnerOverlay><SpinnerContainer /></SpinnerOverlay>
    ) : (
        <WrappedComponent { ...otherProps } />
    )
)

export default LoadingSpinner; //Este es un high order component