"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOdd = void 0;
var is_even_1 = require("is-even");
var isOdd = function (x) { return !(0, is_even_1.isEven)(x); };
exports.isOdd = isOdd;
