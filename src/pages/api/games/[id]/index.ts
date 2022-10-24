import { Game } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../services/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game>
) {
  const id = req.query.id as string;
  const game = await prisma.game.findUnique({ where: { id } });
  res.status(200).json(game as Game);
}
