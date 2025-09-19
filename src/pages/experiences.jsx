import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-6">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

function Details({ children }) {
  return <div className="mt-2">{children}</div>
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - Wahyu Budi Prayogo</title>
        <meta
          name="description"
          content="This page presents my journey and experiences"
        />
      </Head>
      <SimpleLayout
        title="This is my experience and journey"
        intro="This page presents my journey and experiences in education, organizational involvement, internships, and work. It highlights the knowledge I have gained, the skills I have developed, and the contributions I have made throughout my academic and professional growth."
      >
        <div className="space-y-6">
          <h1>
            <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              Education Background
            </span>
          </h1>
          <ExperienceSection title="Universitas Telkom Purwokerto">
            <div className="mt-4 text-sm text-zinc-400 dark:text-zinc-200">
              Lulusan Sarjana Sistem Informasi - IPK 3.64 / 4.00
            </div>
            <Appearance
              href=""
              title="Pengalaman Mengajar"
              description="Asisten dosen pada mata kuliah Pemrograman Perangkat Lunak Mobile, membantu dosen dalam mendampingi mahasiswa pada kegiatan praktikum, memberikan bimbingan terkait materi pemrograman mobile (seperti Android/Flutter), serta mendukung proses evaluasi tugas dan proyek."
              event="Asisten dosen pada mata kuliah pemrograman perangkat lunak mobile"
              cta="Oktober 2020  -  Februari 2025"
            />
            <Appearance
              href=""
              title="Pengalaman Organisasi"
              description="Menjadi panitia program PKKMB “Care for Maba” yang diselenggarakan oleh Himpunan Mahasiswa Sistem Informasi (HMSI) Universitas Telkom Purwokerto, dengan jumlah peserta lebih dari 500 mahasiswa baru. Bertanggung jawab dalam perencanaan, koordinasi, dan pelaksanaan kegiatan untuk mendukung proses orientasi mahasiswa baru."
              event="Panitia program PKKMB “Care for Maba” Organisasi HMSI"
              cta="Oktober 2020  -  Februari 2025"
            />
          </ExperienceSection>
          <ExperienceSection title="SMA Negeri 1 Ajibarang">
            <div className="mt-4 text-sm text-zinc-400 dark:text-zinc-200">
              Lulusan Ilmu Sosial (IPS) - Nilai UN 8.6 / 10.0
            </div>
            <Appearance
              href=""
              title="Pengalaman Organisasi"
              description="Ketua program lingkungan “Adiwiyata” pada bidang pengolahan limbah sampah tahun 2019. Bertanggung jawab dalam merancang, mengoordinasikan, dan mengawasi kegiatan pengolahan sampah untuk mendukung terciptanya lingkungan sekolah yang bersih, sehat, dan berkelanjutan."
              event="Ketua program lingkungan “Adiwiyata”"
              cta="Tahun 2019  -  2020"
            />
            <Appearance
              href=""
              title="Pengalaman Organisasi"
              description="Ketua kegiatan Ikatan Pelajar Nahdlatul Ulama (IPNU) cabang Sambirata periode 2018–2020. Memimpin dan mengoordinasikan berbagai program kerja, kegiatan pendidikan, sosial, dan keagamaan, serta membangun kolaborasi antar pelajar untuk meningkatkan kualitas organisasi dan kontribusi kepada masyarakat."
              event="Ketua kegiatan Ikatan Pelajar Nahdlatul Ulama (IPNU) cabang Sambirata"
              cta="Tahun 2018  -  2020"
            />
          </ExperienceSection>
          <span>
            <br />
          </span>
          <h1>
            <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              Work Background
            </span>
          </h1>
          <ExperienceSection title="Toko INDOSAM Supermarket Mini">
            <div className="mt-4 text-sm text-zinc-400 dark:text-zinc-200">
              Paningkaban | Banyumas | Indonesia
            </div>
            <Appearance
              href=""
              title="Pengalaman Bekerja"
              description="Menangani pemasangan perangkat komputer serta jaringan antar komputer (kasir, gudang, keamanan). Melakukan instalasi OS, aplikasi IPOS dan maintenance aplikasi untuk mendukung sistemoperasional. Mengoperasikan aplikasi IPOS untuk pencatatan persediaan dan pelaporan stok barang. Mendukung tim warehouse dalam validasi data barang masuk/keluar serta distribusi inventori."
              event="Staff Warehouse dan Teknisi IT"
              cta="Agustus 2024 – Agustus 2025"
            />
          </ExperienceSection>
          <span>
            <br />
          </span>
          <h1>
            <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              Intership Background
            </span>
          </h1>
          <ExperienceSection title="PT Kinema Systrans Multimedia">
            <div className="mt-4 text-sm text-zinc-400 dark:text-zinc-200">
              Nongsa Digital Park | Batam | Indonesia
            </div>
            <Appearance
              href=""
              title="Pengalaman Magang"
              description="Membantu tim dalam perencanaan, pembuatan konsep, serta desain UI/UX untuk game (intro, main, dan outro). Berkontribusi dalam mendesain aset grafis karakter dan animasi guna mendukung pengembangan game. Melakukan pengujian dan debugging pada game untuk memastikan kualitas dan fungsionalitas yang optimal sebelum peluncuran. Bekerja sama dengan tim pengembang untuk mengintegrasikan desain grafis ke dalam game menggunakan tools seperti Unity dan Adobe Illustrator."
              event="Junior Game Developer"
              cta="Agustus 2023 – Januari 2024"
            />
          </ExperienceSection>
          <ExperienceSection title="PT Tristar Surya Gemilang (TSG)">
            <div className="mt-4 text-sm text-zinc-400 dark:text-zinc-200">
              Purwokerto Timur | Banyumas | Indonesia
            </div>
            <Appearance
              href=""
              title="Pengalaman Magang"
              description="Perencanaan dan desain UI/UX Aplikasi Mobile dan Web (tsgdaily). Pengembangan Frontend Aplikasi (tsgdaily) dengan mobile Flutter Framework dan web React.js. Melakukan pengujian dan debugging pada aplikasi untuk memastikan kualitas dan fungsionalitas yang optimal sebelum peluncuran. Bekerja sama dengan tim pengembang untuk mengintegrasikan desain grafis ke dalam aplikasi menggunakan tools seperti Figma, Flutter, dan React.js."
              event="Junior Frontend Developer"
              cta="Februari 2023 – Juli 2023"
            />
          </ExperienceSection>
        </div>
      </SimpleLayout>
    </>
  )
}
