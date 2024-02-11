import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(userID: number, ) {
    const todos = await prisma.todos.findMany({
        where: {
            userID: userID,
        },
        select: {
            done: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);