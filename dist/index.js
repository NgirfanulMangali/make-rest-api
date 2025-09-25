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
async function main() {
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            posts: {
                create: { title: 'Hello World' },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        },
    });
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    });
    console.dir(allUsers, { depth: null });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
// read all data
const data = [{ id: 1, name: "eeee", address: "fffffff" }, { id: 2, name: "John Doe", address: "123 Main St" }];
// read specific data
app.get('/', (req, res) => {
    res.json(data);
});
app.post('/newUser', (req, res) => {
    const newUser = req.body;
    data.push(newUser);
    res.json(data);
});
app.delete('/deleteUser/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = data.findIndex(user => user.id === userId);
    if (index !== -1) {
        data.splice(index, 1);
        res.json({ message: 'User deleted successfully', data });
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.listen(5000, () => {
    console.log('Server started on port http://localhost:5000');
});
