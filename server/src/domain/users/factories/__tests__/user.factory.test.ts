import { expect } from 'vitest';

import { UserFactory } from '../user.factory';
import { UserEntityMock } from '../../entities/__mocks__/user.entity.mock';
import { User } from '../../entities/user';

describe('UserFactory', () => {
	describe('Common', () => {
		test('Should be defined', () => {
			expect(UserFactory).toBeDefined();
		});
	});

	describe('Create', () => {
		test('Should exist', () => {
			expect(UserFactory.create).toBeDefined();
		});

		test('Should create User', () => {
			const values = UserEntityMock.create();
			const user = UserFactory.create(values);

			expect(user).toBeInstanceOf(User);
		});
	});
});
