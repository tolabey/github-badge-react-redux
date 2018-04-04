import {
    updateUserName,
    updateFollowers,
    updateForks,
    updateGraphData,
    updateLanguages,
    updatePP,
    updateRepoActivity,
    updateRepos,
    updateStargazers,
    updateUserUrl,
    timeoutAction,
    updateStatus
} from "../actions/actions";

export const utils = {
    prepareReposFields(repos){

    let [forks, repoCount, stargazers, languages, repoActivity, controlMapLanguages, graphData] = [0, 0, 0, "", "", {}, [0, 0, 0, 0, 0, 0, 0]];
    const graphColumnNumber = 7, dateDistance = 10;


    const controlDateArr = utils.createControlDates(graphColumnNumber, dateDistance);

    if(repos[Symbol.iterator] !== undefined){
        repos.forEach(function(repo){
            if(!repo.fork) {
                repoCount++;
                stargazers += repo.stargazers_count;

                if(!(controlMapLanguages[repo.language]) && repo.language !== null ){
                    controlMapLanguages[repo.language] = true;
                    languages += repo.language + ", ";
                }

                graphData = utils.prepareGraphData(controlDateArr, graphData, new Date(repo.pushed_at));
                repoActivity = utils.getRepoActivity(controlDateArr[6], new Date(repo.pushed_at), repo.name) || "No recent repo activity";
            }
            else{
                forks++;
            }
        });

    }
    return [
            {id: "forks", value: utils.abbreviateNumber(forks), fallback: "-"},
            {id: "repos", value: utils.abbreviateNumber(repoCount), fallback: "-"},
            {id: "stargazers", value: utils.abbreviateNumber(stargazers), fallback: "-"},
            {id: "languages", value: languages + "", fallback: "-"},
            {id: "repo-activity", value: repoActivity + "", fallback: "-"},
            {id: "graph", value: graphData, fallback: [0,0,0,0,0,0,0]}
        ]

},

    abbreviateNumber(number){
        const million = 1000000, thousand = 1000;
        if(typeof number !== "number"){
            return number;
        }
        if(number > million){
            return (number / million).toFixed(1) + "m";
        }
        else if(number > thousand){
            return (number / thousand).toFixed(1) + "k";
        }
        return number + "";
    },

    getRepoActivity(controlDate, repoDate, repoName = "There is no repo activity"){
        if(controlDate > repoDate){
            return null;
        }
        return "Recently worked on " + repoName;
    },

    createControlDates(arrSize, dateDistance){
        const today = new Date();
        let result = [];

        for(let i = 0; i < arrSize; i++){
            result[i] = new Date(today.setDate(today.getDate() - dateDistance));
        }
        return result;
    },

    prepareGraphData(controlDates, graphData, repoDate){
        for(let i = 0; i < controlDates.length; i++){
            if(repoDate > controlDates[i]){
                graphData[(controlDates.length - 1) - i] ++;
                break;
            }
        }
        return graphData;
    },

    httpGet(theUrl){
        return new Promise(function(resolve, reject) {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl);
            xmlHttp.send();
            xmlHttp.onload = function(){
                resolve({
                    status: JSON.parse(xmlHttp.status),
                    result: JSON.parse(xmlHttp.response)
                })
            }
        })
    },

    updateBadgeData(store, field, value){
        switch (field){
            case "html_url":
                store.dispatch(updateUserUrl(value));
                break;
            case "login":
                store.dispatch(updateUserName(value));
                break;
            case "followers":
                store.dispatch(updateFollowers(value));
                break;
            case "forks":
                store.dispatch(updateForks(value));
                break;
            case "graph":
                store.dispatch(updateGraphData(value));
                break;
            case "languages":
                store.dispatch(updateLanguages(value));
                break;
            case "avatar_url":
                store.dispatch(updatePP(value));
                break;
            case "repo-activity":
                store.dispatch(updateRepoActivity(value));
                break;
            case "repos":
                store.dispatch(updateRepos(value));
                break;
            case "stargazers":
                store.dispatch(updateStargazers(value));
                break;
            default: break;
        }
    },

    handleGithubRequest(store, userName){
        const githubBaseUrl = "https://api.github.com/users/";
        const usersUrl = githubBaseUrl + userName;
        const reposUrl = githubBaseUrl + userName + "/repos?per_page=100";
        Promise.all([utils.httpGet(usersUrl), utils.httpGet(reposUrl)])
            .then((data) => {
                const userFields = [
                    {id: "login", fallback: userName},
                    {id: "followers", fallback: "-"},
                    {id: "avatar_url", fallback: "https://cdn.pixabay.com/photo/2012/04/15/19/12/cross-34976_960_720.png"},
                    {id: "html_url", fallback: ""}
                ];
                const reposFields = utils.prepareReposFields(data[1].result);

                if(data[0].status === 200){
                    store.dispatch(updateStatus(200));
                    userFields.map((eachField) => {
                        utils.updateBadgeData(store, eachField.id, data[0].result[eachField.id]);
                        return eachField;
                    });

                    reposFields.map((eachField) => {
                        utils.updateBadgeData(store, eachField.id, eachField.value);
                        return eachField;
                    });
                }
                else if(data[0].status === 404){
                    store.dispatch(updateUserName(userName));

                    store.dispatch(updateStatus(404));

                }
                else if(data[0].status === 403){
                    store.dispatch(updateStatus(403));
                }
            })
    },

    debounce(store, func, event, timeout = null){
        timeout = store.getState().timeout;
        clearTimeout(timeout);
        timeout = setTimeout(func, 720, store, event.target.value || "facebook");
        store.dispatch(timeoutAction(timeout))
    }

};