import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
const noteRouter = new Hono<{
Bindings: {
          DATABASE_URL: string
}
}>();

noteRouter.get('/bulk', async (c) => {
const prisma = new PrismaClient({
datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate());

const notes = await prisma.notes.findMany({});

return c.json(notes);
})

noteRouter.get('/:id', async (c) => {
const id = c.req.param('id');
const prisma = new PrismaClient({
datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate());

const note = await prisma.notes.findUnique({
where: {
id
}
});
return c.json(note);
})

noteRouter.post('/create', async (c) => {
const prisma = new PrismaClient({
datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate());
console.log("inside create")
const body = await c.req.json();
try {
const user = await prisma.notes.create({
data: {
title: body.title,
content: body.content
}
});
console.log("note created")

return c.json(user);
} catch(e) {
return c.status(403);
}
})
export default noteRouter