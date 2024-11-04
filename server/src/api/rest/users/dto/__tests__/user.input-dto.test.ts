import {beforeAll, describe, expect} from "vitest";
import {UserInputDtoMock} from "../__mocks__/user.input-dto.mock";
import {validateSync} from "class-validator";

describe("UserInputDTO", () => {
    describe("Validation tests", () => {
        describe("firstName", ()=>{
            it("Should report if firstName is empty", () => {
                const mockValues = {
                    firstName: "",
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if firstName is null", () => {
                const mockValues = {
                    firstName: null as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if firstName is not a string", () => {
                const mockValues = {
                    firstName: 0 as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })
        })

        describe("lastName", ()=>{
            it("Should report if lastName is empty", () => {
                const mockValues = {
                    lastName: "",
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if lastName is null", () => {
                const mockValues = {
                    lastName: null as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if lastName is not a string", () => {
                const mockValues = {
                    lastName: 0 as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })
        })


        describe("email", ()=>{
            it("Should report if email is empty", () => {
                const mockValues = {
                    email: "",
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if email is null", () => {
                const mockValues = {
                    email: null as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if email is not a string", () => {
                const mockValues = {
                    email: 0 as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })
        })


        describe("password", ()=>{
            it("Should report if password is empty", () => {
                const mockValues = {
                    password: ""
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if password is null", () => {
                const mockValues = {
                    password: null as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })

            it("Should report if password is not a string", () => {
                const mockValues = {
                    password: 0 as unknown as string,
                }

                const instance = UserInputDtoMock.create(mockValues);
                const errors = validateSync(instance);

                expect(errors.length).toBeGreaterThan(0)
            })
        })
    })
})
