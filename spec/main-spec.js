const main = require('../main/main');

describe('taxi fee', function () {
    it('within 2km and no parking' , function() {
        let inputs = {distance:1,parkTime:5};
        let summary = main(inputs);
        let expected = 7;
        expect(summary).toEqual(expected);
    });
    it('between 2km and 8km and parking' , function() {
        let inputs = {distance:7,parkTime:10};
        let summary = main(inputs);
        let expected = 13;
        expect(summary).toEqual(expected);
    });
    it('more than 8km and no parking' , function() {
        let inputs = {distance:15,parkTime:0};
        let summary = main(inputs);
        let expected = 19;
        expect(summary).toEqual(expected);
    });
    it('在2KM以内，无停车' , function() {
        let inputs = {distance:1,parkTime:0};
        let summary = main(inputs);
        let expected = 6;
        expect(summary).toEqual(expected);
    });
    it('在2km和8km之间，无停车' , function() {
        let inputs = {distance:7,parkTime:0};
        let summary = main(inputs);
        let expected = 10;
        expect(summary).toEqual(expected);
    });
    it('超过8km，无停车' , function() {
        let inputs = {distance:10,parkTime:0};
        let summary = main(inputs);
        let expected = 13;
        expect(summary).toEqual(expected);
    });
    it('超过8km，有停车' , function() {
        let inputs = {distance:15,parkTime:20};
        let summary = main(inputs);
        let expected = 24;
        expect(summary).toEqual(expected);
    });
});
