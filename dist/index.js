"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const data = [
    { id: 1, name: 'johnson', address: ' california' },
    { id: 2, name: 'robert', address: 'new york' }
];
// read all data
app.get('/', (req, res) => {
    res.json(data);
});
// read specific data
app.get('/data/:id', (req, res) => {
    const specificId = Number(req.params.id);
    const match = data.find(i => i.id === specificId);
    if (!match)
        return res.status(404).json({ message: 'error' });
    res.json(match);
});
// update the data 
app.put('/data/:id', (req, res) => {
    const specificId = Number(req.params.id);
    const { name, address } = req.body;
    const match = data.find(i => i.id === specificId);
    if (!match)
        return res.status(404).json({ message: 'error' });
    if (name)
        match.name = name;
    if (address)
        match.address = address;
    res.json(match);
});
// Create the Data
app.post('/Users', (req, res) => {
    const { name, address } = req.body;
    // generate ID based on current array length
    const id = data.length + 1;
    // Create one new user
    const newUser = { id, name, address };
    // Save to array
    data.push(newUser);
    res.status(201).json(newUser);
});
app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000/');
});
