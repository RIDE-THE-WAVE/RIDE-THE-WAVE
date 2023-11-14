// options 이름 바꿔도 괜찮을 듯?
// 액션 함수들을 정의하는 파일

export const setUsers = (options) => ({
    type: 'SET_USERS',
    payload: options,
});

export const setRecords = (options) => ({
    type: 'SET_RECORDS',
    payload: options,
});

export const setUserComments = (options) => ({
    type: 'SET_COMMENTS',
    payload: options,
});

export const setDevelopData = (options) => ({
    type: 'SET_DEVELOPED_DATA',
    payload: options,
});

export const setCurrentUserData = (options) => ({
    type: 'SET_CURRENT_USER_DATA',
    payload: options,
});

export const setCurrentUser = (options) => ({
    type: 'SET_CURRENT_USER',
    payload: options,
});

export const setAuth = (options) => ({
    type: 'SET_AUTH',
    payload: options,
});

export const setSide = (options) => ({
        type: 'SET_SIDE',
        payload: options,
});

export const setFlip = (options) => ({
    type: 'SET_FLIP',
    payload: options,
});

export const setStart = (options) => ({
    type: 'SET_START',
    payload: options,
});

export const setFin = (options) => ({
    type: 'SET_FIN',
    payload: options,
});

