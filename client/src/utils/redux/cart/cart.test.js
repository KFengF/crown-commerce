import cartReducer from './cart.reducer';
import * as cartActions from './cart.actions';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

describe('cart reducer', () => {
    let mockItem;
    let mockPrevState;

    beforeAll(() => {
        mockItem = {
            id: 1,
            quantity: 3
        }
        mockPrevState = {
            hidden: true,
            cartItems: [mockItem, { id: 2, quantity: 1 }]
        }
    });
    
    it('should return initial state', () => {
        expect(cartReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    });

    it('should toggle hidden with toggleCartDropdown', () => {
        expect(cartReducer(INITIAL_STATE, cartActions.toggleCartDropdown()).hidden)
            .toBe(false);
    });

    it('should add item to cart with addItem', () => {
        expect(cartReducer(
            mockPrevState, 
            cartActions.addItem(mockItem)
        ).cartItems[0].quantity).toBe(4);
    });

    it('should remove item from cart with removeItem', () => {
        const newState = cartReducer(
            mockPrevState, cartActions.removeItem(mockItem)
        );
        expect(newState.cartItems[0].id).not.toBe(1);
    });

    it('should decrease item from cart with decreaseItem', () => {
        const newState = cartReducer(
            mockPrevState, cartActions.decreaseItem(mockItem)
        );
        expect(newState.cartItems[0].quantity).toBe(2);
    });

    it('should clear cart with clearCart', () => {
        const newState = cartReducer(
            mockPrevState, cartActions.clearCart(mockItem)
        );
        expect(newState.cartItems).toEqual([]);
    });
});