'use strict';

/*

*/

/*
debugging boilerplate
*/
const dline = '========================';
const sline = '------------------------';

let isConLog = true;
let isDebugLog = false;

function clog(...args){
    if(isConLog)
        console.log(...args);
}
function dlog(...args){
    if(isDebugLog && isConLog)
        console.log(...args);
}

function clogdline(){
    clog(dline);
}
function clogsline(){
    clog(sline);
}
function dlogdline(){
    dlog(dline);
}
function dlogsline(){
    dlog(sline);
}

/*
function to solve the problem
*/
function pythtrip(){
  return {a:0, b:0, c:0}
}
/*
driver
*/

function parseCommandLineArgs(){
    let isError = false;
    let unknownArgs = [];
    const myArgs = process.argv.slice(2);
    let debugstrarr=['-d','--debug'];
    let verbosearr=['-v','--verbose'];
    for( ; myArgs.length >= 1; myArgs.shift()){
        // let test=parseInt(myArgs[0]);
        if( debugstrarr.includes(myArgs[0].toLowerCase()) ){
            isDebugLog = true;
            dlog('calling args: ',myArgs)
            dlog('debug set to TRUE')
        }
        else if( debugstrarr.includes(myArgs[0].toLowerCase()) ){
            isConLog = true;
            clog('calling args: ',myArgs)
            clog('debug set to TRUE')
        }
        else{
          isError = true;
          unkownArgs.add(myArgs[0]);
        }
        if(isError){
            // let shelp = myArgs[0].toLowerCase();
            // if( shelp === '-h' || '--help')
            console.log('usage: node pythtrip.js [-d] [--debug] [-v] [--verbose]');
            console.log('       -d or --debug. : extra debugging output');
            console.log('       -v or --verbose: extra chatty output');
            return(0);
        }
    }
}

function main(){
    
}
}
