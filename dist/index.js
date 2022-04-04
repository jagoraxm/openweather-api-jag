"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIKEY = '---';
//const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&lang=es&appid=' + APIKEY;
//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&lang=es&appid=' + APIKEY;
//const url = 'https://api.openweathermap.org/data/2.5/weather?zip=03630,mx&units=metric&lang=es&appid=' + APIKEY;
__exportStar(require("./services/api.service"), exports);
__exportStar(require("./interfaces/api.interface"), exports);
