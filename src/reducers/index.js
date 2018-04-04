import {combineReducers} from "redux";
import {
    userName,
    pp,
    repoActivity,
    graphData,
    stargazers,
    followers,
    forks,
    languages,
    repos,
    userUrl,
    timeout,
    status
} from "./badge";

export default combineReducers({
    userName,
    pp,
    repoActivity,
    graphData,
    stargazers,
    followers,
    forks,
    languages,
    repos,
    userUrl,
    timeout,
    status
})