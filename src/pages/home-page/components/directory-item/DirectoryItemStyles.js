import styled, { css } from 'styled-components';

const largeStyles = css`height: 380px;`;

const setLargeStyle = props => props.size ? largeStyles : null;

export const DirectoryItemDiv = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    ${ setLargeStyle }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;

        .background {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        .content {
            opacity: 0.9;
        }
    }

    .background {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }

    .content {
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        background-color: white;
        opacity: 0.7;
        position: absolute;
    }
`;

export const TitleH2 = styled.h2`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
`;

export const SubtitleSpan = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;