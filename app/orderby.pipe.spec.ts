import { OrderbyPipe } from './orderby.pipe';

describe('OrderbyPipe', () => {
    it('create an isntance', () => {
        const pipe = new OrderbyPipe();
        expect(pipe).toBeTruthy();
    });
});
