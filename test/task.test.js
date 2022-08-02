let chai = require('chai');
let chaihttp = require('chai-http');
const { response } = require('../index');
let server = require('../index');
//assertion
chai.should();

chai.use(chaihttp);

describe('Tasks apis', () => {

    describe('GET api/tasks', () => {

        it('testing get api', (done) => {
            chai.request(server).get("/api/tasks")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eq(3);
                    done();
                })
        })


        it('it should not be get API', (done) => {
            chai.request(server).get("/api/task")
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                })
        })
    })

    describe('GET api/tasks:id', () => {
        it('it should get task by id', (done) => {
            const id = 1;
            chai.request(server).get("/api/tasks/" + id)
                .end((err, res) => {
                    res.promise.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('completed');
                    res.body.should.have.property('id').eq(1);
                    done();
                })
        })

    })
})


    // describe("test for add function",()=>{
    //     it('stub the add method',(done)=>{

    //     })
    // })









