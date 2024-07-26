import { deleteSync } from 'del';
export const deletedPaths = await deleteSync(`./build/**.*`);