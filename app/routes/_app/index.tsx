import { createFileRoute } from '@tanstack/react-router'

import { Logo } from '~/components/logo'

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Logo />
      <h1 className="font-bold">kolm start</h1>
    </>
  )
}
