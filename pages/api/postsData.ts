import type { NextApiRequest, NextApiResponse } from 'next'
import { FC } from 'react'
import {data} from "./data/data"

type datasRes = {
  id: number,
  title: string,
  body: string,
  userId?: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(data)
}
