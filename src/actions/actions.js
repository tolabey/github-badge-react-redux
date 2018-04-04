import {
    NEW_USER_NAME,
    NEW_STARGAZERS,
    NEW_REPOS,
    NEW_REPO_ACTIVITY,
    NEW_LANGUAGES,
    NEW_GRAPH_DATA,
    NEW_FORKS,
    NEW_FOLLOWERS,
    NEW_PP,
    NEW_USER_URL,
    TIMEOUT,
    STATUS
} from "../const";

export function updateUserName(userName){
    return {
        type: NEW_USER_NAME,
        payload: userName
    }
}

export function updatePP(pp){
    return {
        type: NEW_PP,
        payload: pp
    }
}

export function updateRepoActivity(repoActivity){
    return {
        type: NEW_REPO_ACTIVITY,
        payload: repoActivity
    }
}

export function updateLanguages(languages){
    return {
        type: NEW_LANGUAGES,
        payload: languages
    }
}

export function updateRepos(repos){
    return {
        type: NEW_REPOS,
        payload: repos
    }
}

export function updateFollowers(followers){
    return {
        type: NEW_FOLLOWERS,
        payload: followers
    }
}

export function updateForks(forks){
    return {
        type: NEW_FORKS,
        payload: forks
    }
}

export function updateStargazers(stargazers){
    return {
        type: NEW_STARGAZERS,
        payload: stargazers
    }
}

export function updateGraphData(graphData){
    return {
        type: NEW_GRAPH_DATA,
        payload: graphData
    }
}

export function updateUserUrl(url){
    return {
        type: NEW_USER_URL,
        payload: url
    }
}

export function timeoutAction(timeout){
    return {
        type: TIMEOUT,
        payload: timeout
    }
}

export function updateStatus(value){
    return {
        type: STATUS,
        payload: value
    }
}