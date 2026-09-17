import { useEffect, useState } from 'react'
import { Hero } from '../../components/Hero'
import { SideBar } from '../../components/SideBar'
// importar type dessa maneira
import type { typeEventsDay } from '../../types'
import './home.css'


type apiResponse = {
    events: typeEventsDay[] | null
}

export function Home() {
    const [eventsDay, setEventsDay] = useState<typeEventsDay[]>([])
    useEffect(() => {
        async function getEventsDay() {
            const resp = await fetch(
                'https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=2026-09-16&s=soccer'
            )
            const respJson: apiResponse = await resp.json()

            if (respJson.events) {
                setEventsDay(respJson.events)
            } else {
                setEventsDay([])
            }
        }
        getEventsDay()
    }, [])
    return (
        <>
            <SideBar />
            <Hero eventsDay={eventsDay}/>
        </>
    )
}