import request from 'supertest';
import TestAgent from 'supertest/lib/agent';
import { expect, describe, it, beforeAll } from 'vitest';

import keys from '../../../../../aop/keys';

describe('UsersController', () => {
	// Create single port binding for all tests since supertest will
	// send RST packets causing ECONNRESET errors
	// @see https://groups.google.com/g/nodejs/c/Sc-_U-aoMsU/m/UW579F8EGo4J
	let supertest: TestAgent;

	beforeAll(() => {
		supertest = request(`http://localhost:${keys.port}`);
	});

	describe('create', () => {
		test('Rejects with 403 if no token header present', async () => {
			const response = await supertest.post('/users');
			expect(response.status).toBe(403);
		});
	});

	describe('getAll', () => {
		test('Rejects with 403 if no token header present', async () => {
			const response = await supertest.get('/users');
			expect(response.status).toBe(403);
		});
	});

	describe('get /:id', () => {
		test('Rejects with 403 if no token header present', async () => {
			const response = await supertest.get('/users/:123456789');
			expect(response.status).toBe(403);
		});
	});

	describe('update', () => {
		test('Rejects with 403 if no token header present', async () => {
			const response = await supertest.put('/users');
			expect(response.status).toBe(403);
		});
	});

	describe('delete', () => {
		test('Rejects with 403 if no token header present', async () => {
			const response = await supertest.delete('/users/123456789');
			expect(response.status).toBe(403);
		});
	});
});
