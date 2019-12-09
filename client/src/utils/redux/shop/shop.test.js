import shopReducer from './shop.reducer';
import * as shopActions from './shop.actions';

const INITIAL_STATE = {
    collections: null,
    isFetching: true,
    errorMessage: undefined
}

describe('shop reducer', () => {
    it('should return initial state', () => {
        expect(shopReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    });

    it('should be true in isFetching when fetchCollectionsStart is triggered', () => {
        expect(shopReducer(
            INITIAL_STATE,
            shopActions.fetchCollectionsStart()
        ).isFetching).toBe(true);
    });

    it(`should be false in isFetching and collections not null 
    when fetchCollectionsSuccess is triggered`, () => {
        const mockItem = { 
            hats: [
                { id: 1, name: 'hello' },
                { id: 2, name: 'how' }
            ],
            sneakers: [
                { id: 3, name: 'are' },
                { id: 4, name: 'you' }
            ]
        }

        const newState = shopReducer(
            INITIAL_STATE, 
            shopActions.fetchCollectionsSuccess(mockItem)
        );

        expect(newState.collections).toBe(mockItem);
        expect(newState.isFetching).toBe(false);
    });

    it(`should be false in isFetching and errorMessage not null 
    when fetchCollectionsFailure is triggered`, () => {
        const error = new Error('An intended error')
        const newState = shopReducer(
            INITIAL_STATE, 
            shopActions.fetchCollectionsFailure(error)
        );

        expect(newState.errorMessage).toBe(error);
        expect(newState.isFetching).toBe(false);
    });
});