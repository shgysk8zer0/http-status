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

/**
 *
 * @param {string} text The status text
 * @param {number} [fallback=500] Fallback status to return if not found
 * @returns {number} The status code corresponding to the given status text
 */
export function getStatus(text, fallback = status.INTERNAL_SERVER_ERROR) {
	return status[text.toUpperCase()] || fallback;
}

/**
 *
 * @param {number} code The status code to get the status text for
 * @returns {string} The status text if found, emptystring otherwise
 */
export function getStatusText(code) {
	const index = Object.values(status).findIndex(status => status === code);

	if (index !== -1) {
		return Object.keys(status)[index];
	} else {
		return '';
	}
}

/**
 *
 * @deprecated
 */
export function getStatusType(code) {
	console.warn('`getStatusType` is deprecated. Please use `getStatusText` instead.');
	return getStatusText(code);
}
