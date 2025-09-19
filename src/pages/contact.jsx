import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contact Me - Wahyu Budi Prayogo</title>
        <meta
          name="description"
          content="Thanks for visiting my website."
        />
      </Head>
      <SimpleLayout
        title="Thanks for visiting."
        intro="I appreciate your time and interest in my work. If you have any questions or feedback, feel free to reach out!"
      />
    </>
  )
}
