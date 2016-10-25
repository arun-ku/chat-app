/**
 * Created by arun on 25/10/16.
 */
'use strict';

import EventEmitter from "events";
import * as Constants from './constants';
global.Constants = Constants;

Function.prototype.toEmitter = function () {
    var origFunc = this;
    return function () {
        var args = arguments;
        var emitter = new EventEmitter();
        process.nextTick(function () {
            origFunc.apply(emitter, args);
        });
        return emitter;
    }
};


