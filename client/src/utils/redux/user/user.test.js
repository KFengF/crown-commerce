import userReducer from './user.reducer';
import * as userActions from './user.actions';

const INITIAL_STATE = {
    currentUser: null,
    error: undefined
}

describe('user reducer', () => {
    it('should return initial state', () => {
        expect(userReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    });

    it('should be currentUser not null when signInSuccess is triggered', () => {
        const mockUser = { id: 1, name: 'hello' };

        expect(userReducer(
            INITIAL_STATE,
            userActions.signInSuccess(mockUser)
        ).currentUser).toEqual(mockUser);
    });

    it('should be error undefined when signUpSuccess is triggered', () => {
        expect(userReducer(
            INITIAL_STATE,
            userActions.signUpSuccess()
        ).error).toEqual(undefined);
    });

    it('should be error when signInFailure is triggered', () => {
        const error = new Error('An intended error');
        expect(userReducer(
            INITIAL_STATE,
            userActions.signInFailure(error)
        ).error).toEqual(error);
    });

    it('should be error when signUpFailure is triggered', () => {
        const error = new Error('An intended error');
        expect(userReducer(
            INITIAL_STATE,
            userActions.signUpFailure(error)
        ).error).toEqual(error);
    });

    it('should be null in currentUser when signOut is triggered', () => {
        expect(userReducer(
            INITIAL_STATE,
            userActions.signOut()
        ).currentUser).toEqual(null);
    });
});