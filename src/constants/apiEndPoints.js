export const BACKEND_URL = 'http://localhost:8000';

export const GET_ALL_EVENTS = {
    url: `api/events`,
    method: 'GET',
};

export const GET_ALL_EVENTS_ID = (Eventid) => ({
    url: `api/events/${Eventid}`,
    method: 'GET',
});

export const PATCH_BOOKMARK_EVENT_ID = (Eventid) => ({
    url: `api/events/${Eventid}`,
    method: 'PATCH',
});  

export const PATCH_REGISTER_EVENT_ID =  (Eventid) => ({
    url: `api/events/${Eventid}`,
    method: 'PATCH',
});

export const GET_ALL_THEMES = {
    url: `api/themes`,
    method: 'GET',
};

export const PUT_SET_THEME = {
    url: `api/themes`,
    method: 'PUT',
};