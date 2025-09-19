import express, { Request, Response } from 'express';
const app = express()

interface User {
    id: number;
    name: string;
    address: string;
}

const data: User[] = [
{ id: 1, name: 'johnson', address:' california'},
{ id: 2, name:'robert', address:'new york'}
];


app.get('/user/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id); // string → number
    const user = data.find(u => u.id === id); // find user by id

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});





app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});



