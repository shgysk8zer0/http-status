import { status, getStatus, getStatusText } from './http-status.js';
import { test, describe } from 'node:test';
import assert from 'node:assert';
const signal = AbortSignal.timeout(30_000);

describe('Test HTTP status and text', () => {
	test('Status codes match status text', { signal }, () => {
		Object.entries(status).forEach(([statusText, status]) => {
			const result = getStatusText(status);
			assert.equal(statusText, result), `Status code ${status} should match status text of ${statusText} but got ${result}.`;
		});
	});

	test('Status text match status code', { signal }, () => {
		Object.entries(status).forEach(([statusText, status]) => {
			const result = getStatus(statusText);
			assert.equal(status, result, `Status text ${statusText} should have a status code of ${status} but got ${result}.`);
		});
	});

	test('Invalid status codes have empty string status code', { signal }, () => {
		const result = getStatusText(-1);
		assert.equal(result, '', `Invalid status codes should have a status test of "" but got ${result}.`);
	});

	test('Invalid status text should return fallback status', { signal }, () => {
		const fallback = status.BAD_GATEWAY;
		const result = getStatus('MADE_UP', fallback);
		assert.equal(result, fallback, `Invalid status text should return given fallback of ${fallback} but got ${result}.`);
	});
});
