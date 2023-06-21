import { ratingOutput } from "../src/client/js/analyzeSentiment";

describe("Testing the submit functionality", () => {
    test("Testing ratingOutput sets textSnip correctly", () => {
        // Mock datas for the Test
        const data = {
            score_tag: 'P+',
            sentence_list: [{ text: 'Lorem ipsum dolor sit amet' }],
            subjectivity: 'subjective'
        };

        // Mock function for getElementById
        const mockGetElementById = jest.fn();

        // Mock calls for getElementById
        document.getElementById = mockGetElementById;
        mockGetElementById.mockReturnValueOnce({ innerHTML: '' });
        mockGetElementById.mockReturnValueOnce({ innerHTML: '' }); 
        mockGetElementById.mockReturnValueOnce({ innerHTML: '' }); 

        ratingOutput(data);

        // Checking if the correct text snippet is set
        expect(mockGetElementById).toHaveBeenCalledWith('textSnip');
        expect(mockGetElementById.mock.calls[2][0]).toBe('textSnip');
        expect(mockGetElementById.mock.results[2].value.innerHTML).toBe('Lorem ipsum dolor sit amet...');
    });


});
