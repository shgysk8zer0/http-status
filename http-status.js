/* eslint-env node */

export const status = {
	'CONTINUE': 100,

	'OK': 200,
	'CREATED': 201,
	'ACCEPTED': 202,
	'NON_AUTHORITATIVE_INFORMATION': 203,
	'NO_CONTENT': 204,

	'MOVED_PERMENANTLY': 301,
	'FOUND': 302,
	'SEE_OTHER': 303,
	'NOT_MODIFIED': 304,
	'TEMPORARY_REDIRECT': 307,
	'PERMENANT REDIRECT': 308,

	'BAD_REQUEST': 400,
	'UNAUTHORIZED': 401,
	'PAYMENT_REQUIRED': 402,
	'FORBIDDEN': 403,
	'NOT_FOUND': 404,
	'METHOD_NOT_ALLOWED': 405,
	'NOT_ACCEPTABLE': 406,
	'REQUEST_TIMEOUT': 408,
	'CONFLICT': 409,
	'GONE': 410,
	'TOO_MANY_REQUESTS': 429,

	'INTERNAL_SERVER_ERROR': 500,
	'NOT_IMPLEMENTED': 501,
	'BAD_GATEWAY': 502,
	'SERVICE_UNAVAILABLE': 503,
	'GATEWAY_TIMEOUT': 504,
	'NETWORK_AUTHENTICATION_REQUIRED': 511,
};

export function getStatus(text, fallback = status.INTERNAL_SERVER_ERROR) {
	return status[text.toUpperCase()] || fallback;
}

export function getStatusType(code) {
	const index = Object.values(status).findIndex(status => status === code);

	if (index !== -1) {
		return Object.keys(status)[index];
	}
}
