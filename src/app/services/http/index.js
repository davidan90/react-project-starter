// Constants
import { HTTP_METHODS } from './constants';

const data = new FormData().append('json', JSON.stringify({}));

const defaultParams = {
    method: HTTP_METHODS,
    body: data
};

const http = ({ url, params = defaultParams }) => 
    fetch(url, params)
        .then(response => JSON.parse(JSON.stringify(response)));
