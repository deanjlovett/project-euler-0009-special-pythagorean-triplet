'use strict';

/*

*/

/*
debugging boilerplate
*/
const dline = '========================';
const sline = '------------------------';

let isConLog = false;
let isDebugLog = false;

function progdot(){
    if(isConLog)
        process.stdout.write('.');
}
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
    // 
    // a + b + c = 1000
    // a^2 + b^2 = c^2
    // est.:   3 < a < 333
    // est.: 292 < b < 500
    // est.: 414 < c < 500

    let c = 499;
    let b = 498;
    let a = 0

    let tsum = 1000;

    let foundIt = false;
    let ret ={};
    let innerloopcount = 0;
    for( ;c > 413; --c){
        b=c-1;
        clog(`c:${c}  b:${b}`);
        for(;b > 292; --b){
            // process.stdout.write('.');
            ++innerloopcount;
            progdot();
            let csmbs = c*c - b*b;
            let  sqrt = Math.sqrt(csmbs);
            let tsqrt = Math.trunc( sqrt );
            a = tsum - b - c;
            if( tsqrt - a === 0 ){
                ret = {a:a, b:b, c:c};
                clog();
                clog(`possible triple:`, ret);
                clog(`a*a + b*b = `, a*a + b*b );
                clog(`      c*c = `, c*c );
                if( a*a + b*b === c*c ){
                    clog(`found it. a:`, a)
                    foundIt = true;
                    break;
                }else{
                    clog(`false alarm!`);
                    clog();
                }
            }
        }
        clog();
        if(foundIt) break;
    }

    let ret4 = {a:a*4, b:b*4, c:c*4};
    clog();
    clog('tried this many triplet:', innerloopcount);
    clog();
    clog(`pyth triple * 4:`, ret4); 
    ret = {a:a, b:b, c:c};
    console.log();
    console.log(`    pyth triple:`, ret); 
    let prod = a*b*c;
    console.log(`    pyth triple prod:`, prod); 
    console.log();
    return prod;
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
            isConLog = true; // what the hell, turn it on here
            dlog('calling args: ',myArgs)
            dlog('debug set to TRUE')
        }
        else if( verbosearr.includes(myArgs[0].toLowerCase()) ){
            isDebugLog = true;  // what the hell, turn it on here
            isConLog = true;
            clog('calling args: ',myArgs)
            clog('debug set to TRUE')
        }
        else{
          isError = true;
          unknownArgs.push(myArgs[0]);
        }
        if(isError){
            console.log();
            console.log('unknown args:',unknownArgs )
            // let shelp = myArgs[0].toLowerCase();
            // if( shelp === '-h' || '--help')
            console.log();
            console.log('usage: node pythtrip.js [-d] [--debug] [-v] [--verbose]');
            console.log('       -d or --debug. : extra debugging output');
            console.log('       -v or --verbose: extra chatty output');
            console.log();
            return(false);
        }
    }
    return true;
}

if( ! parseCommandLineArgs() ) return(0);
pythtrip();

// function main(){
//     parseCommandLineArgs
//     pythtrip();
// }
// main();