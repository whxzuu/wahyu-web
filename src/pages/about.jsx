import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Wahyu Budi Prayogo</title>
        <meta
          name="description"
          content="I'm Wahyu Budi Prayogo. A Programmer, Designer, and frontend enthusiast in Indonesian, ID."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Wahyu Budi Prayogo
              <p className="mt-2 text-5xl tracking-tight text-teal-500">
                A Junior Frontend Developer, Programmer, and Designer enthusiast
                in Indonesian, ID.
              </p>
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Saya adalah lulusan Fresh graduate S1 Sistem Informasi
                Universitas Telkom Purwokerto dengan minat di Web Development
                dan IT Support. Terampil dalam HTML, CSS, JavaScript, Frontend
                Mobile Developer, Frontend Web Developer menguasai beberapa
                framework seperti React, Next.js, dan Flutter. Memiliki
                pengalaman magang sebagai Frontend Developer dan aktif
                berorganisasi. Termotivasi untuk berkontribusi dalam
                pengembangan sistem digital perusahaan.
              </p>
              <p>
                Saya adalah seorang yang bersemangat dalam pengembangan web dan
                desain antarmuka pengguna. Dengan latar belakang pendidikan di
                bidang Sistem Informasi, saya memiliki pemahaman yang kuat
                tentang konsep-konsep teknologi informasi dan bagaimana
                mengaplikasikannya dalam pengembangan web.
              </p>
              <p>
                I&apos;m a fresh graduate with a Bachelor’s degree in
                Information Systems from Telkom University Purwokerto, with a
                strong interest in Web Development and IT Support. Skilled in
                HTML, CSS, and JavaScript, with experience as a Frontend Mobile
                and Web Developer, proficient in frameworks such as React,
                Next.js, and Flutter. I have internship experience as a Frontend
                Developer and have been actively involved in organizational
                activities. Highly motivated to contribute to the development of
                the company’s digital systems.
              </p>
              <p>
                I&apos;m passionate about web development and user interface
                design. With an educational background in Information Systems, I
                have a strong understanding of information technology concepts
                and how to apply them in web development.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://x.com/Jirafuku" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/whyxuu_zz/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/whxzuu"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/wahyu-budi-prayogo-932600270/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:wahyubudiprayogo8@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  Email
                </span>
                <span> </span>
                wahyubudiprayogo8@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
