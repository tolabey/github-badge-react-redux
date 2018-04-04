import {
    NEW_PP,
    NEW_FOLLOWERS,
    NEW_FORKS,
    NEW_GRAPH_DATA,
    NEW_LANGUAGES,
    NEW_REPO_ACTIVITY,
    NEW_REPOS,
    NEW_STARGAZERS,
    NEW_USER_NAME, NEW_USER_URL, TIMEOUT, STATUS
} from "../const";

export function userName(state = "", action){
    switch (action.type){
        case NEW_USER_NAME:
            return action.payload;
        default:
            return state;
    }
}

export function pp(state = "", action){
    switch (action.type){
        case NEW_PP:
            return action.payload;
        default:
            return state;
    }
}


export function repoActivity(state = "", action) {
    switch (action.type){
        case NEW_REPO_ACTIVITY:
            return action.payload;
        default:
            return state;
    }
}

export function languages(state = "", action) {
    switch (action.type){
        case NEW_LANGUAGES:
            return action.payload;
        default:
            return state;
    }
}

export function repos(state = "", action) {
    switch (action.type){
        case NEW_REPOS:
            return action.payload;
        default:
            return state;
    }
}

export function followers(state = "0", action) {
    switch (action.type){
        case NEW_FOLLOWERS:
            return action.payload;
        default:
            return state;
    }
}

export function forks(state = "", action) {
    switch (action.type){
        case NEW_FORKS:
            return action.payload;
        default:
            return state;
    }
}

export function stargazers(state = "", action) {
    switch (action.type){
        case NEW_STARGAZERS:
            return action.payload;
        default:
            return state;
    }
}

export function graphData(state = [0, 0, 0, 0, 0, 0, 0], action) {
    switch (action.type){
        case NEW_GRAPH_DATA:
            return action.payload;
        default:
            return state;
    }
}

export function userUrl(state = "", action){
    switch (action.type){
        case NEW_USER_URL:
            return action.payload;
        default:
            return state;
    }
}

export function timeout(state = null, action){
    switch (action.type){
        case TIMEOUT:
            return action.payload;
        default:
            return state;
    }
}

export function status(state = true, action){
    switch (action.type){
        case STATUS:
            return action.payload;
        default: return state;
    }
}