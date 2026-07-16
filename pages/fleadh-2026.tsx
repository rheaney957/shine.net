import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ResponseData } from './comedy'
import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'

export interface Fleadh2026Props {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Fleadh2026({menu, setMenu}:Fleadh2026Props)
{
  const [data, setdata] = React.useState<ResponseData>()
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() =>
  {
    setLoading(true)
    fetch('https://www.venuecloud.net/api/events?venuecloudid=27&category=12')
      .then((res) => res.json())
      .then((data) =>
      {
        setdata(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loading/>
  if (!data) return <p>No Fleadh 2026 events</p>

  const gigs = data?.events;
  console.log('gigs', gigs)

  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='Fleadh 2026' />
      <NavBar menu={menu} setMenu={setMenu} />
      <Breadcrumbs />
      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title='Fleadh 2026' data={gigs}>
          {(!isLoading && gigs instanceof Array) && gigs?.map((gig: any, index: number) => {
            const isFree = Array.isArray(gig?.categories) && gig.categories.some((category: any) => String(category).toLowerCase().includes('free'));

            return (
              <Card
                key={index}
                gig={{
                  time: gig?.doors,
                  startDate: gig?.startDate,
                  name: gig?.title,
                  support: gig?.subTitle,
                  location: gig?.venue,
                  websiteImage: gig?.websiteImage,
                  ticketsUrl: gig?.ticketsUrl,
                  status: gig?.isSoldOut,
                  categories: gig?.categories,
                }}
              />
            )
          })}
        </Layout>
      </main>
      <Footer menu={menu}/>
    </div>
  )
}
