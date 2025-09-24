"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// read all data
const buah = [{ id: 2, name: "eeee", address: "fffffff" }, { id: 1, name: "John Doe", address: "123 Main St" }];
// read specific data
app.get('/buah', (req, res) => {
    res.json(buah);
});
app.listen(4000, () => {
    console.log('Server started on port http://localhost:4000/buah');
});
