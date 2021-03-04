import { add } from 'utils';

const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('ADD', () => { // a test suite or one set of tests
    it('can join strings', () => {
        expect(add('me', 'you')).toEqual('me you');
        // expect(mockAlert).toBeCalledWith('me you')
    })

    it('can join string to numbers', () => {
        expect(add('me', 1)).toEqual('me 1');
    })

    it('can join number to number', () => {
        expect(add(1, 1)).toEqual('1 1');
    })

    it('doesnt actually add numbers', () => {
        expect(add(5, 5)).not.toEqual(10)
    })
})