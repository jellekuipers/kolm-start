import { createAPIFileRoute } from '@tanstack/start/api'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { createContext } from '~/trpc/init'
import { appRouter } from '~/trpc/router'

function handler({ request }: { request: Request }) {
  return fetchRequestHandler({
    req: request,
    router: appRouter,
    endpoint: '/api/trpc',
    createContext: () => createContext(request),
  })
}

export const APIRoute = createAPIFileRoute('/api/trpc')({
  GET: handler,
  POST: handler,
})
