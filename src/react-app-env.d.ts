/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
        readonly REACT_APP_ACCOUNT: string;
        readonly REACT_APP_LOGIN: string;
        readonly REACT_APP_POST_SEARCH: string;
        readonly REACT_APP_POST_UPLOAD: string;
        readonly REACT_APP_ALL_USERS_POSTS: string;
        readonly REACT_APP_USER_INFO: string;
        readonly REACT_APP_USER_ALL_INFO: string;
    }
}