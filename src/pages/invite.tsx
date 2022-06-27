import React from 'react'
import RedirectPage from '../components/RedirectPage'

// This is jsut a fallback, there is a server-side redirect set up in /vercel.json

export default function Support() {
  return (
    <RedirectPage href="https://discord.com/api/oauth2/authorize?client_id=475421235950518292&permissions=16384&scope=bot%20applications.commands" />
  )
}
