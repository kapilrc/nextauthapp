import { getSession } from 'next-auth/react';
import React from 'react'

const dashboard = ({ session }) => {
  return (
    <div>dashboard</div>
  )
}

export default dashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  // authorize user return session
  return {
    props: { session }
  }
}