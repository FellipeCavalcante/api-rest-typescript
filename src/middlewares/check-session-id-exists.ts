import { FastifyReply, FastifyRequest } from 'fastify'

export async function chekcSessionIdExists(
  req: FastifyRequest,
  replay: FastifyReply,
) {
  const sessionId = req.cookies.sessionId

  if (!sessionId) {
    return replay.status(401).send({
      error: 'Unauthorized',
    })
  }
}
