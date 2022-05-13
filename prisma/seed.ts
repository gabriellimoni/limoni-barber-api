import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const permissions: Prisma.permissionCreateInput[] = [
  {
    name: "seed-permission",
    description: "Just a seed permission",
  },
];

async function run() {
  await prisma.permission.createMany({
    data: permissions,
  });
}
run();
