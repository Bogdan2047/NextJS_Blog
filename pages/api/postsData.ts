import type { NextApiRequest, NextApiResponse } from 'next'
import {post} from "./get_posts/post"


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(post)
}
