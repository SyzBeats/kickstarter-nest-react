import {expect} from "vitest";
import {User} from "../user";
import {UserEntityMock} from "../__mocks__/user.entity.mock";

describe("UserEntity", ()=>{
    describe("Common", ()=>{
        test("Is defined", ()=>{
            expect(User).toBeDefined()
        })
    })

    describe("Getters", ()=>{
        test("_id", () => {
            const user = UserEntityMock.create();
            expect(user._id).toBeDefined()
        })

        test("createdAt", () => {
            const user = UserEntityMock.create();
            expect(user.createdAt).toBeDefined()
        })

        test("updatedAt", () => {
            const user = UserEntityMock.create();
            expect(user.updatedAt).toBeDefined()
        })

        test("firstName", () => {
            const user = UserEntityMock.create();
            expect(user.firstName).toBeDefined()
        })

        test("lastName", () => {
            const user = UserEntityMock.create();
            expect(user.lastName).toBeDefined()
        })

        test("email", () => {
            const user = UserEntityMock.create();
            expect(user.email).toBeDefined()
        })

        test("password", () => {
            const user = UserEntityMock.create();
            expect(user.password).toBeDefined()
        })
    })

    describe("Constructor", () => {
        test("Assigns _id", () => {
            const TEST_ID = "TEST_ID_123456";
            const user = UserEntityMock.create({_id: TEST_ID});

            expect(user._id).toBe(TEST_ID);
        })

        test("Assigns createdAt", () => {
            const TEST_CREATED_AT = new Date();
            const user = UserEntityMock.create({createdAt: TEST_CREATED_AT});

            expect(user.createdAt.getDate()).toBe(TEST_CREATED_AT.getDate());
        })

        test("Assigns updatedAt", () => {
            const TEST_UPDATED_AT = new Date();
            const user = UserEntityMock.create({updatedAt: TEST_UPDATED_AT});

            expect(user.updatedAt.getDate()).toBe(TEST_UPDATED_AT.getDate());
        })

        test("Assigns firstName", () => {
            const TEST_FIRST_NAME = "TEST_FIRST_NAME_123456";
            const user = UserEntityMock.create({firstName: TEST_FIRST_NAME});

            expect(user.firstName).toBe(TEST_FIRST_NAME);
        })

        test("Assigns lastName", () => {
            const TEST_LAST_NAME = "TEST_LAST_NAME_123456";
            const user = UserEntityMock.create({lastName: TEST_LAST_NAME});

            expect(user.lastName).toBe(TEST_LAST_NAME);
        })

        test("Assigns email", () => {
            const TEST_EMAIL = "TEST_EMAIL_123456";
            const user = UserEntityMock.create({email: TEST_EMAIL});

            expect(user.email).toBe(TEST_EMAIL);
        })

        test("Assigns password", () => {
            const TEST_PASSWORD = "TEST_PASSWORD_123456";
            const user = UserEntityMock.create({password: TEST_PASSWORD});

            expect(user.password).toBe(TEST_PASSWORD);
        })
    })
})