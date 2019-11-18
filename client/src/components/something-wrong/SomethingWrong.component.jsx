import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './SomethingWrong.styles';

const SomethingWrong = () => (
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
        <ErrorImageText>
            Something went wrong...
        </ErrorImageText>
    </ErrorImageOverlay>
);

export default SomethingWrong;