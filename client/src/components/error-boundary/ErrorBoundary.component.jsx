import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styles';

class ErrorBoundary extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imgaeUrl='https://i.imgur.com/A040Lxr.png' />
                    <ErrorImageText>
                        Something went wrong...
                    </ErrorImageText>
                </ErrorImageOverlay>
            );
        } else return this.props.children;
    }
}

export default ErrorBoundary;