const request = require("supertest");
const async = require("async");
const app = require("../app");

const testDb = require("../database/connection").testDb;

const usersFixture = require("./fixtures/users");

const bcrypt = require("bcrypt");

beforeAll(done => {
  const truncateQuery = `TRUNCATE users`;

  const insertUserQuery = `
      INSERT INTO users (user_id, user_username, user_email, user_hashed_password)
      VALUES (null, "user14658458", "user1123515@email.com", 123456)
    `;

  testDb.query(truncateQuery, () => {
    testDb.query(insertUserQuery, () => {
      done();
    });
  });
});

afterAll(() => {
  testDb.end();
});

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

  test("should return a 409 error if username is taken", async () => {
    const user = usersFixture.userAccsDuplicateUsername[0];

    await request(app)
      .post("/users")
      .send(user)
      .expect(409);
  });

  test("should return a 409 error if email is taken", async () => {
    const user = usersFixture.userAccsDuplicateEmail[0];

    await request(app)
      .post("/users")
      .send(user)
      .expect(409);
  });

  test("should return status 200 if registration successful", async () => {
    const user = usersFixture.userAccsValid[0];

    await request(app)
      .post("/users")
      .send(user)
      .expect(200);
  });
});

describe("POST /users/login", () => {
  test("should return a 400 error if username is invalid", async () => {
    const userInvalidCredentials = {
      username: "user400",
      password: "123456"
    };

    await request(app)
      .post("/users/login")
      .send(userInvalidCredentials)
      .expect(400);
  });

  test("should return a 400 error if password is invalid", async () => {
    const userInvalidCredentials = {
      username: "user200",
      password: "234567"
    };

    await request(app)
      .post("/users/login")
      .send(userInvalidCredentials)
      .expect(400);
  });

  test("should return status 200 with a token if login successful", async () => {
    const userValidCredentials = {
      username: "user200",
      password: "123456"
    };

    const res = await request(app)
      .post("/users/login")
      .send(userValidCredentials)
      .expect(200);

    console.log(res.body);

    expect(res.body).toEqual(
      expect.objectContaining({
        token: expect.stringContaining("Bearer"),
        username: expect.stringMatching("user200")
      })
    );
  });
});

/*

test("should return status 200 with response containing a token if registration successful", async () => {
    const user = usersFixture.userAccsValid[0];

    const res = await request(app)
      .post("/users")
      .send(user)
      .expect(200);

    expect(res.body).toEqual(
      expect.objectContaining({
        token: expect.any(String)
      })
    );
  });

*/
