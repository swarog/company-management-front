import React from 'react';
import {Admin, fetchUtils} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from "./authProvider";

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider("/api", httpClient);

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={simpleRestProvider('/api')}>
        <div>test</div>
    </Admin>
  );
}

export default App;
