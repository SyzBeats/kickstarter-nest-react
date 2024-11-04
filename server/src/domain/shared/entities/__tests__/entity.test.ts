import { describe, it, expect } from 'vitest';

import { EntityBaseMock } from '../__mocks__/entity.mock';

describe('EntityBase', () => {
	const mockId = '12345';
	const mockCreatedAt = new Date('2023-01-01T00:00:00Z');
	const mockUpdatedAt = new Date('2023-01-02T00:00:00Z');

	let entity: EntityBaseMock;

	beforeEach(() => {
		entity = new EntityBaseMock(mockId, mockCreatedAt, mockUpdatedAt);
	});

	describe('Constructor', () => {
		it('should be defined', () => {
			expect(entity).toBeDefined();
		});
	});

	describe('Behavior', () => {
		it('should return the correct _id', () => {
			expect(entity._id).toBe(mockId);
		});

		it('should return the correct createdAt date', () => {
			expect(entity.createdAt).toEqual(mockCreatedAt);
		});

		it('should return the correct updatedAt date', () => {
			expect(entity.updatedAt).toEqual(mockUpdatedAt);
		});
	});
});
