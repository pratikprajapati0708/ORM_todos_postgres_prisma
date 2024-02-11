import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userID: number, title: string, description: string) {
  const todo = await prisma.todos.create({
    data: {
      title,
      description,
      userID
    },
  });
  console.log(todo);

}

createTodo(1, "go to gym", "go to gym and do 10 pushups");