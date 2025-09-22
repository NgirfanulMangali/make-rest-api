import express, { Request, Response } from 'express';
const app = express()
app.use(express.json());
interface User {
    id: number;
    name: string;
    address: string;
}

const data: User[] = [
{ id: 1, name: 'johnson', address:' california'},
{ id: 2, name:'robert', address:'new york'}
];

// read all data
app.get('/', (req: Request, res: Response) => {
    res.json(data)
})

// read specific data
app.get('/data/:id', (req: Request, res: Response) => {
    
    const specificId = Number(req.params.id) 
    const match: User | undefined  = data.find(i => i.id === specificId)
    if(!match) return res.status(404).json({message: 'error'})
    res.json(match)
}
)


// update the data 
app.put('/data/:id', (req: Request, res: Response) => {

    const specificId = Number(req.params.id)
    const { name, address} = req.body
    const match: User | undefined  = data.find(i => i.id === specificId)
    if(!match) return res.status(404).json({message: 'error'})

    if (name) match.name = name;
    if (address) match.address = address;

    res.json(match)

})

// Create the Data
app.post('/Users', (req: Request, res: Response) => {
    const { name, address} = req.body
     // generate ID based on current array length
  const id = data.length + 1;

  // Create one new user
  const newUser: User = { id, name, address };

  // Save to array
  data.push(newUser);

  res.status(201).json(newUser);
})




app.listen(3000, () => {
  console.log('Server started on port http://localhost:3000/');
});




