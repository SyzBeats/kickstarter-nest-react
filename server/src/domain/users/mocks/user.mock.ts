import {User} from "../entities/user";

export class UserMock {
    static create(overwriteValues: Partial<User> = {}): User {
        const {
            _id = null,
            createdAt = new Date('2023-01-15'),
            updatedAt = new Date('2023-02-15'),
            firstName = "John",
            lastName= "Doe",
            email = "example@example.com",
            password = "123456798"
        } = overwriteValues;

        return new User(_id, createdAt, updatedAt, firstName, lastName, email, password)
    }
}
