import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import * as LoginSchema from './login.json';
import * as UserSchema from './user.json';

const ajv = new Ajv();
addFormats(ajv);

export const validateLogin = ajv.compile(LoginSchema);
export const validateUser = ajv.compile(UserSchema);
