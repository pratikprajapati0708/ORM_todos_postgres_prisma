import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodos(userID: number, ) {
    const res = await prisma.todos.findMany({
        where:{
            userID,
        }
    })
    console.log(res);
}

getTodos(1);