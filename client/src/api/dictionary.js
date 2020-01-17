import { LOGIN, REGISTRATION, DICTIONARY_GET, DICTIONARY_POST } from './keys';
import api from './index';

const { get, post } = api;

export default {
    [LOGIN]: { method: post, url: '/login' },
    [REGISTRATION]: { method: post, url: '/registration' },
    [DICTIONARY_GET]: { method: get, url: '/dictionary' },
    [DICTIONARY_POST]: { method: post, url: '/dictionary' }
}
