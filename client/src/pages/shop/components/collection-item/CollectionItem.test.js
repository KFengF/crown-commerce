import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './CollectionItem.component';

describe('CollectionItem component', () => {
    let wrapper;
    let mockItem;
    let mockAddItem;
    let mockName;
    let mockPrice;

    beforeAll(() => {
        mockName = 'floral t-shirt';
        mockPrice = 15;
        mockItem = {
            name: mockName,
            price: mockPrice,
            imageUrl: 'http://www.testing.com/image.png'
        }
        mockAddItem = jest.fn();
        const mockProps = {
            item: mockItem,
            addItem: mockAddItem
        }
        wrapper = shallow(<CollectionItem { ...mockProps } />);
    });

    it('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('item prop', () => {
        it('should be the text floral t-shirt in NameSpan', () => {
            expect(wrapper.find('NameSpan').text()).toBe(mockName);
        });

        it('should be the text 15 in PriceSpan', () => {
            expect(wrapper.find('PriceSpan').text()).toBe(String(mockPrice));
        });

        it(`should be {"backgroundImage": "url(http://www.testing.com/image.png)"}
            in ImageDiv style prop`, () => {
                expect(wrapper.find('ImageDiv').prop('style')).toStrictEqual(
                    {"backgroundImage": "url(http://www.testing.com/image.png)"}
                );
            }
        );
    });

    describe('addItem prop', () => {
        it('should call addItem when clicked in CustomButtonStyled', () => {
            wrapper.find('CustomButtonStyled').simulate('click');
            expect(mockAddItem).toHaveBeenCalled();
        });
    });
});