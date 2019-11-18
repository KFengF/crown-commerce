import React from 'react';
import SomethingWrong from './SomethingWrong.component';

class SomethingWrongHandler extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error) {
        console.error(error);
    }

    render() {
        if (this.state.hasError) return <SomethingWrong />; 
        else return this.props.children;
    }//Esto es error boundary
}

export default SomethingWrongHandler;