import { Game } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../services/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game[]>
) {
  const games = await prisma.game.findMany({
    include: { _count: { select: { ads: true } } },
  });
  res.status(200).json(games);
}
