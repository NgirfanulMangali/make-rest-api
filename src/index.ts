import express, { Request, Response } from 'express';
const app = express()
app.use(express.json())
interface User {
    id: number;
    name: string;
    address: string;
}


// read all data

const data: User[] = [{ id:1, name: "eeee", address: "fffffff"}, { id: 2, name: "John Doe", address: "123 Main St" }];
// read specific data
app.get('/', (req: Request, res: Response) => {
  res.json(data);
});
app.post('/newUser', (req: Request, res: Response) => {
  const newUser: User = req.body;
  data.push(newUser);
  res.json(data);
});

app.delete('/deleteUser/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const index = data.findIndex(user => user.id === userId);
  if (index !== -1) {
    data.splice(index, 1);
    res.json({ message: 'User deleted successfully', data });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


app.listen(5000, () => {
  console.log('Server started on port http://localhost:5000');
});




