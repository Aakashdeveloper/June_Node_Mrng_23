let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect
chai.use(chaiHttp);

describe('Testing Users Api',() => {
    it('Should Return 200 for users',(done) => {
        chai.request('http://127.0.0.1:7710')
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('Should Return 404 for user',(done) => {
        chai.request('http://127.0.0.1:7710')
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('Should Return 200 for addUser',(done) => {
        chai.request('http://127.0.0.1:7710')
        .post('/addUser')
        .send({"name":"TestingUser","isActive":true})
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
})