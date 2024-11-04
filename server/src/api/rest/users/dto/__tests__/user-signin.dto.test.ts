import { describe, expect } from 'vitest';
import { validateSync } from 'class-validator';

import { UserSignInDtoMock } from '../__mocks__/user-signin.dto.mock';

describe('UserSignInDto', () => {
	describe('Validation tests', () => {
		describe('email', () => {
			it('Should report if email is empty', () => {
				const mockValues = {
					email: '',
				};

				const instance = UserSignInDtoMock.create(mockValues);
				const errors = validateSync(instance);

				expect(errors.length).toBeGreaterThan(0);
			});

			it('Should report if email is null', () => {
				const mockValues = {
					email: null as unknown as string,
				};

				const instance = UserSignInDtoMock.create(mockValues);
				const errors = validateSync(instance);

				expect(errors.length).toBeGreaterThan(0);
			});

			it('Should report if email is not a string', () => {
				const mockValues = {
					email: 0 as unknown as string,
				};

				const instance = UserSignInDtoMock.create(mockValues);
				const errors = validateSync(instance);

				expect(errors.length).toBeGreaterThan(0);
			});
		});

		describe('password', () => {
			it('Should report if password is empty', () => {
				const mockValues = {
					password: '',
				};

				const instance = UserSignInDtoMock.create(mockValues);
				const errors = validateSync(instance);

				expect(errors.length).toBeGreaterThan(0);
			});

			it('Should report if password is null', () => {
				const mockValues = {
					password: null as unknown as string,
				};

				const instance = UserSignInDtoMock.create(mockValues);
				const errors = validateSync(instance);

				expect(errors.length).toBeGreaterThan(0);
			});

			it('Should report if password is not a string', () => {
				const mockValues = {
					password: 0 as unknown as string,
				};

				const instance = UserSignInDtoMock.create(mockValues);
				const errors = validateSync(instance);

				expect(errors.length).toBeGreaterThan(0);
			});
		});
	});
});
