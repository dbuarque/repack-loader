/**
 * Created by dbuarque on 1/24/16.
 */
'use strict';
const fs = require('fs');
const debug  = require('debug')('repack:loader');

export class RepackLoader {
    constructor(){
    }

    /**
     * Install a npm pack
     */
    install(packageName){

    }

    load(filePath){
        //load a repack.json file and add commands packs to repack
        var obj = require(filePath);
        console.log(obj);
    }
}