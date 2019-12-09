import directoryReducer from './directory.reducer';
import DATA from '../../../assets/data';

const INITIAL_STATE = {
    sections: DATA
}

describe('directory reducer', () => {
    it('should return initial state', () => {
        expect(directoryReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    });
});