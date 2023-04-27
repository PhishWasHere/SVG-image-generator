

const shapeList = [
    'circle', 'square', 'triangle'
];

describe('SVG generator', () => {
    describe('shape', () => { //test to see if the shape is the same as the answer
        it('should be the same shape', () => {
            const shape = 'circle';
            const answer = shapeList[0];
            expect(shape).toBe(answer);
        })
    });
      
});
