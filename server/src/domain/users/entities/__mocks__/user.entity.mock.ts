import {User} from "../user";

export class UserEntityMock {
    static create(overwriteValues: Partial<User> = {}): User {
        const {
            _id = "123456",
            createdAt = new Date(),
            updatedAt = new Date(),
            firstName = "John",
            lastName = "Doe",
            email = "mail@example.com",
            password = "123456789"
        } = overwriteValues;

        return new User(
            _id,
            createdAt,
            updatedAt,
            firstName,
            lastName,
            email,
            password,
        )
    }
}