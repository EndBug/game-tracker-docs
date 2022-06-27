import React from 'react'
import RedirectPage from '../components/RedirectPage'
import vercel from '../../vercel.json'

// This is jsut a fallback, there is a server-side redirect set up in /vercel.json

export default function Support() {
  return (
    <RedirectPage href={vercel.redirects.find(e => e.source == '/invite')?.destination} />
  )
}
