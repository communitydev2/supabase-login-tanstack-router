import { createFileRoute } from '@tanstack/react-router'
import { useEffect,useState } from 'react'
import { supabase } from '../supabaseClient'
import { Auth } from './Auth'
import {Account} from './Account'

export const Route = createFileRoute('/LandingPage')({
  component: LandingPage,
})

export default function LandingPage() {
    const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => data.subscription.unsubscribe();
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}
