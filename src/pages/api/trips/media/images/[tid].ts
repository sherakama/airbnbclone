import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest , res: NextApiResponse) {

  const source = 'https://picsum.photos';
  const { tid, height = '576', width = '576' } = req.query;
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
    images.items.push(`${source}/${height}/${width}`);
  }

  res.status(200).json(images);
}