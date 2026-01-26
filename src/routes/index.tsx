import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from './SignUp'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <SignUp/>
  )
}