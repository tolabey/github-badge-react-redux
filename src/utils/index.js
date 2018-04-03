import $ from 'jquery'

export const utils = {

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

    viewSparklineGraph(dataArr) {
        $(function() {
            $('.bar').sparkline(dataArr, {type: 'bar', barColor: 'green'});
        });
    },

    viewUpdate(field, text){
        const elements = document.getElementsByClassName(field);
        console.log(field, text);
        for (let i = 0; i < elements.length; i++){
            elements[i].innerText = text;
        }
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

    handleDebounce(executer, searchText, timeout = null) {
        clearTimeout(timeout);
        timeout = setTimeout(executer, 720, searchText);
    }


};