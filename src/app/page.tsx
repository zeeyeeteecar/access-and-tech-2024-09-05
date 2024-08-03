import React from "react";

import { PrismaClient } from "@prisma/client";

export default async function page() {
  const prisma = new PrismaClient();

  const users = await prisma.tBEventReg_SEEE_2018_VenderInfo.findMany();

  return <>{JSON.stringify(users)}</>;
}
