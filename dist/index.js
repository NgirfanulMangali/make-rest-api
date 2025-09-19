"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const data = [
    { id: 1, name: 'johnson', address: ' california' },
    { id: 2, name: 'robert', address: 'new york' }
];
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id); // string → number
    const user = data.find(u => u.id === id); // find user by id
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
});
