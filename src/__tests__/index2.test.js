import { getPercents } from "../index2.js";

describe("test percents", () => {

    it('get 10 percents of number 150', () => {
        const result = getPercents(10, 150);
        expect(result).toBe(15);
    }),

    it('get 3 percents of number 90', () => {
        const result = getPercents(3, 90);
        expect(result).toBe(2.7);
    });

});
