import styled from 'styled-components';
import CustomButton from '../../../../components/custom-button/CustomButton';

export const CollectionItemDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    height: 350px;
    width: 22vw;
    margin-bottom: 30px;

    &:hover {
        div {
            opacity: 0.8;
        }

        button {
            display: block;
        }
    }
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionFooter = styled.footer`
    width: 100%;
    height: 5%;
    display: flex;
    font-size: 18px;
`;

export const CustomButtonStyled = styled(CustomButton)`
    display: none;
    position: absolute;
    top: 255px;
    width: 80%;
    opacity: 0.85;
`;

export const NameSpan = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceSpan = styled.span`margin-left: auto;`;