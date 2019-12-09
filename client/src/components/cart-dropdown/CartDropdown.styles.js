import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton.component';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    @media screen and (max-width: 800px) {
        top: 70px;
        right: 20px;
    }
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const EmptyMessageSpan = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

EmptyMessageSpan.displayName = 'EmptyMessageSpan';

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;

CartDropdownButton.displayName = 'CartDropdownButton';