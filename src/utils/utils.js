import {
    timeoutAction,
    updateBadgeDataAction
} from "../actions/actions";

export const utils = {

  debounce(dispatch, func, event, timeout = null) {
    clearTimeout(timeout);
    const newTimeout = setTimeout(func, 720, dispatch, event.target.value || "facebook");

    dispatch(timeoutAction(newTimeout));
  },

  handleGithubRequest(dispatch, userName) {
    const githubBaseUrl = "https://api.github.com/users/";
    const usersUrl = githubBaseUrl + userName;
    const reposUrl = githubBaseUrl + userName + "/repos?per_page=100";
    let allFields = [];

    Promise.all([utils.httpGet(usersUrl), utils.httpGet(reposUrl)])
            .then(data => {
              allFields = {
                login: data[0].result.login || userName,
                followers: data[0].result.followers,
                avatar_url: data[0].result.avatar_url, // eslint-disable-line camelcase
                html_url: data[0].result.html_url, // eslint-disable-line camelcase
                status: data[0].status || 200
              };

              allFields = Object.assign(utils.prepareReposFields(data[1].result), allFields);

              dispatch(updateBadgeDataAction(allFields));
            });
  },

  prepareReposFields(repos) {
    let [forks, repoCount, stargazers, languages, repoActivity, controlMapLanguages, graphData] = [0, 0, 0, "", "", {}, [0, 0, 0, 0, 0, 0, 0]];
    const graphColumnNumber = 7, dateDistance = 10;
    const controlDateArr = utils.createControlDates(graphColumnNumber, dateDistance);

    if (typeof repos[Symbol.iterator] !== "undefined") {
      repos.forEach(function(repo) {
        if (!repo.fork) {
          repoCount++;
          stargazers += repo.stargazers_count;

          if (!(controlMapLanguages[repo.language]) && repo.language !== null) {
            controlMapLanguages[repo.language] = true;
            languages += repo.language + ", ";
          }

          graphData = utils.prepareGraphData(controlDateArr, graphData, new Date(repo.pushed_at));
          repoActivity = utils.getRepoActivity(controlDateArr[6], new Date(repo.pushed_at), repo.name) || repoActivity || "No recent repo activity";
        } else {
          forks++;
        }
      });
    }

    return {
      forks: utils.abbreviateNumber(forks),
      repos: utils.abbreviateNumber(repoCount),
      stargazers: utils.abbreviateNumber(stargazers),
      languages: languages + "",
      "repo-activity": repoActivity + "",
      graphData: graphData
    };
  },

  abbreviateNumber(number) {
    const million = 1000000, thousand = 1000;

    if (typeof number !== "number") {
      return number;
    }
    if (number > million) {
      return (number / million).toFixed(1) + "m";
    } else if (number > thousand) {
      return (number / thousand).toFixed(1) + "k";
    }

    return number + "";
  },

  getRepoActivity(controlDate, repoDate, repoName) {
    if (controlDate > repoDate) {
      return null;
    }

    return "Recently worked on " + repoName;
  },

  createControlDates(arrSize, dateDistance) {
    const today = new Date();
    let result = [];

    for (let i = 0; i < arrSize; i++) {
      result[i] = new Date(today.setDate(today.getDate() - dateDistance));
    }

    return result;
  },

  prepareGraphData(controlDates, graphData, repoDate) {
    for (let i = 0; i < controlDates.length; i++) {
      if (repoDate > controlDates[i]) {
        graphData[(controlDates.length - 1) - i] ++;
        break;
      }
    }

    return graphData;
  },

  httpGet(theUrl) {
    return new Promise(function(resolve) {
      let xmlHttp = new XMLHttpRequest();

      xmlHttp.open("GET", theUrl);
      xmlHttp.send();
      xmlHttp.onload = function() {
        resolve({
          status: JSON.parse(xmlHttp.status),
          result: JSON.parse(xmlHttp.response)
        });
      };
    });
  }
};
