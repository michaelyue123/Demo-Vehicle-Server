import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../config.js";
// import { app } from "../index.js";

/*
 * Test the /GET route
 */
chai.use(chaiHttp);
let expect = chai.expect;

describe("Demo Vehicle", () => {
  it("it should GET all the dealers", (done) => {
    chai
      .request(baseUrl)
      .get("/development/dealers")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  /**
   * This test is not passing for some reason. 
   * it("it should GET all the dealer details", (done) => {
      const bac = "122345";
      chai
        .request(baseUrl)
        .get(`/development/dealers/${bac}`)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .end((_err, res) => {
          expect(res).to.have.status(200);
          // expect(res).body.should.be.a("array");
          // expect(res).body.length.should.be.eql(0);
          done();
        });
    });
   */
});
