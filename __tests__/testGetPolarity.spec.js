import { getPolarity } from "../src/client/js/analyzeSentiment";

describe("Testing the get Polarity function", () => {
    test("Testing getPolarity with scoreTag 'P+'", () => {
        const scoreTag = 'P+';
        const expected = 'positive';
        const result = getPolarity(scoreTag);
        expect(result).toBe(expected);
    });

    test("Testing getPolarity with scoreTag 'P'", () => {
        const scoreTag = 'P';
        const expected = 'positive';
        const result = getPolarity(scoreTag);
        expect(result).toBe(expected);
    });

    test("Testing getPolarity with scoreTag 'N+'", () => {
        const scoreTag = 'N+';
        const expected = 'negative';
        const result = getPolarity(scoreTag);
        expect(result).toBe(expected);
    });

    test("Testing getPolarity with scoreTag 'N'", () => {
        const scoreTag = 'N';
        const expected = 'negative';
        const result = getPolarity(scoreTag);
        expect(result).toBe(expected);
    });

    test("Testing getPolarity with unknown scoreTag", () => {
        const scoreTag = 'X';
        const expected = 'neutral';
        const result = getPolarity(scoreTag);
        expect(result).toBe(expected);
    });
});
