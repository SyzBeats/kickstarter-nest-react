import {CreateUserInputDto} from "../user.input-dto";

export class UserInputDtoMock {
    static create(overwriteValues: Partial<CreateUserInputDto> = {}): CreateUserInputDto {
        const {
            firstName = "John",
            lastName = "Doe",
            email = "mail@example.com",
            password = "123456789"
        } = overwriteValues;

        const dto = new CreateUserInputDto();

        dto.email = email;
        dto.password = password;
        dto.firstName = firstName;
        dto.lastName = lastName;

        return dto;
    }
}