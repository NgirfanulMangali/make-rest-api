import express from 'express';

import { PrismaClient } from '../generated/prisma';
const app = express()
app.use(express.json())


const prisma = new PrismaClient()


app.get('/users', async (req, res) => {
  
    const users = await prisma.user.findMany({
      include: { profile: true } 
    });

    res.json(users);
  
});


app.put('/user/:id', async (req, res) => {

  const profile = await prisma.profile.update({
      where: { userId: Number(req.params.id) },   
      data: { bio: req.body.bio }                 
    });

  res.json(profile)
})


app.post('/user', async (req, res) => {

  const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        profile: {
          create: { bio: req.body.bio }
        }
      },
      include: { profile: true } 
    });

  res.json(user)
})


app.delete('/user/:id', async (req, res) => {

  const user = await prisma.user.delete({
      where: { id: Number(req.params.id) } 
    });

  res.json(user)
})


app.listen(5000, () => {
  console.log('Server started on port http://localhost:5000');
});




