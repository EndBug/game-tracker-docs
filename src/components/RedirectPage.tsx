import React from 'react'
import Layout from '@theme/Layout'
import styles from './RedirectPage.module.css'

interface RedirectPageProps {
  href: string
}

export default function RedirectPage(props: RedirectPageProps) {
  React.useEffect(() => {
    window.location.replace(props.href)
  })

  return (
    <Layout wrapperClassName={styles.wrapper}>
      <p>
        Redirecting you to <a href={props.href}>{props.href}</a>
      </p>
    </Layout>
  )
}
