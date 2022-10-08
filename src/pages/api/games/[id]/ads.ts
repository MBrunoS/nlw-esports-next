import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../services/prisma";
import { convertHourStringToMinutes } from "../../../../utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "../../../../utils/convert-minutes-to-hour-string";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gameId = req.query.id as string;

  if (req.method === "GET") {
    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekdays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(
      ads.map((ad) => {
        return {
          ...ad,
          weekdays: ad.weekdays.split(","),
          hourStart: convertMinutesToHourString(ad.hourStart),
          hourEnd: convertMinutesToHourString(ad.hourEnd),
        };
      })
    );
  } else if (req.method === "POST") {
    const { body } = req;

    const ad = await prisma.ad.create({
      data: {
        gameId,
        name: body.name,
        yearsPlaying: body.yearsPlaying,
        weekdays: body.weekdays.join(","),
        discord: body.discord,
        hourEnd: convertHourStringToMinutes(body.hourEnd),
        hourStart: convertHourStringToMinutes(body.hourStart),
        useVoiceChannel: body.useVoiceChannel,
      },
    });

    res.status(201).json(ad);
  }
}
