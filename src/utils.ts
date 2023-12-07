export const createDeepCopy = <T>(ip: T): T => JSON.parse(JSON.stringify(ip));
