const { Cube, add } = require('../src/app');
const expect = require('chai').expect;
const sinon= require('sinon');
const myObj = new Cube();
describe('testing the cube function', function () {
    it("1.side length of cube", function (done) {
        let c1 = new Cube(3);
        expect(c1.getSideLength()).to.equal(3);
        done();
    });
    it('2. The surface area of the Cube', function (done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });

    it('3. The volume of the Cube', function (done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
})

describe('testing the function to add', function(){
    it('1. the two integers',function(done){
        var stub= sinon.stub(myObj,'getaddNumber');
        stub.withArgs(10,20).returns (30);
        expect(myObj.getaddNumber(10,20)).to.be.equal(30);
        done();
    });

    it('2.should able to handle 0',function(done){
        let result=add();
        expect(result).to.be.eq(0);
        done();
    });
  
})