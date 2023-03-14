// import { axios } from "./node_modules/axios";

function API(){
    

    // function startTimer(duration, display) {
    //     var timer = duration, minutes, seconds;
    //     setInterval(function () {
    //         minutes = parseInt(timer / 60, 10);
    //         seconds = parseInt(timer % 60, 10);
    
    
    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;
    
    //         display.textContent = minutes + ":" + seconds;
    
    //         if (--timer < 0) {
    //             timer = duration;
    //         }
    //     }, 1000);
    // }
    
    // window.onload = function () {
    //     var fiveMinutes = 60 * 5,
    //         display = document.querySelector('#time');
    //     startTimer(fiveMinutes, display);
    // };
    
    // axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(function(res){
    //     console.log(res);
    // });
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'https://drag49487jr.github.io/';
    let config = {
        data : {
            "name" : "test"
        },
    }
    let headers = {
        headers : {
            "Access-Control-Allow-Origin" : "*"
        }
    }
    axios.post('https://flow.zoho.com/740372226/flow/webhook/incoming?zapikey=1001.31fdb9777de60c19b4a55ec7441aff70.78ea5e1074ad30766f4d6b5edff5849b&isdebug=false',config,headers)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
    });
}
API();

