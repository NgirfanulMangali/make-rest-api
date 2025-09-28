"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const prisma = new prisma_1.PrismaClient();
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
    res.json(profile);
});
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
    res.json(user);
});
app.delete('/user/:id', async (req, res) => {
    const user = await prisma.user.delete({
        where: { id: Number(req.params.id) }
    });
    res.json(user);
});
app.listen(5000, () => {
    console.log('Server started on port http://localhost:5000');
});
