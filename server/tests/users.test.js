const request = require("supertest");
const async = require("async");
const app = require("../app");

const usersFixture = require("./fixtures/users");

describe("POST /users", () => {
  test("should return a 401 error if any registration field is empty", done => {
    const users = usersFixture.userAccsEmptyField;

    return async.series(
      [
        cb => {
          request(app)
            .post("/users")
            .send(users[0])
            .expect(401, cb);
        },
        cb => {
          request(app)
            .post("/users")
            .send(users[1])
            .expect(401, cb);
        },
        cb => {
          request(app)
            .post("/users")
            .send(users[2])
            .expect(401, cb);
        },
        cb => {
          request(app)
            .post("/users")
            .send(users[3])
            .expect(401, cb);
        }
      ],
      done
    );
  });

  test("should return a 401 error if email is invalid", done => {
    const users = usersFixture.userAccsInvalidEmail;

    return async.series(
      [
        cb => {
          request(app)
            .post("/users")
            .send(users[0])
            .expect(401, cb);
        },
        cb => {
          request(app)
            .post("/users")
            .send(users[1])
            .expect(401, cb);
        }
      ],
      done
    );
  });

  test("should return a 401 error if passwords do not match", done => {
    const users = usersFixture.userAccsPasswordsNotMatching;

    return async.series(
      [
        cb => {
          request(app)
            .post("/users")
            .send(users[0])
            .expect(401, cb);
        }
      ],
      done
    );
  });

  test("should return a 409 error if username is taken", () => {});

  test("should return a 409 error if email is taken", () => {});

  test("should return status 200 with response containing a token if registration successful", () => {});
});
