import { Server } from "./server";
import prisma from '../prisma/db'


(async () => {
    await prisma.$connect()
    const server = new Server()
    await server.start()
})()