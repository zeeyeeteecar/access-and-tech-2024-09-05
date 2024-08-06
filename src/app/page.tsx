import React from "react";

import { PrismaClient } from "@prisma/client";

export default async function page() {
  const prisma = new PrismaClient();

  const users = await prisma.tBEventReg_SEEE_2018_VenderInfo.findMany();

  return (
    <>
      {users &&
        users.map((user: any, key: number) => {
          return (
            <>
              <li>{JSON.stringify(user)}</li>
              <div className="w-full">ttttttt</div>
            </>
          );
        })}
    </>
  );
}
