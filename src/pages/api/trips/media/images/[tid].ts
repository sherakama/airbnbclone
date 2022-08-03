import type { NextApiRequest, NextApiResponse } from 'next';
import md5 from 'md5';

/**
 * @swagger
 * /api/trips/media/images/{tid}:
 *   get:
 *     description: Returns a random number between 1-10 of image paths
 *     parameters: [
 *       {
 *         name: "tid",
 *         in: "path",
 *         description: "The trip id",
 *         required: true
 *       }
 *     ]
 *     responses:
 *       200:
 *         description: hello world
 */
export default function handler(req: NextApiRequest , res: NextApiResponse) {

  const source = 'https://picsum.photos';
  const { tid, height = '720', width = '480' } = req.query;
  const num: number = Math.floor(Math.random() * 10) + 1;
  const images: {
    meta: { [key: string]: string | string[] | undefined }, 
    items: string[]
  } = { 
    meta: {
      tid,
      height,
      width,
    },
    items: [],
  };

  for (let i = 1; i <= num; i++) {
    const seed = md5(`bnbclone-${tid}-${i}`); 
    images.items.push(`${source}/seed/${seed}/${height}/${width}`);
  }

  res.status(200).json(images);
}

