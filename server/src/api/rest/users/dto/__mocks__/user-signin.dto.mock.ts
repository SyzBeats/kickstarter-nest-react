import {UserSignInDto} from "../user-signin.dto";

export class UserSignInDtoMock {
    static create(overwriteValues: Partial<UserSignInDto> = {}): UserSignInDto {
        const {
            email = "mail@example.com",
            password = "123456789"
        } = overwriteValues;

        const dto = new UserSignInDto();

        dto.email = email;
        dto.password = password;

        return dto;
    }
}