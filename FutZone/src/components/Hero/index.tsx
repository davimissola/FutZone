import './hero.css'
// importar type dessa maneira
import type { typeEventsDay }from '../../types'


type typeHeroProps = {
    eventsDay: typeEventsDay[]
}

                                // props tem que ser tipada desse jeito
export function Hero({ eventsDay }: typeHeroProps) {
    console.log(eventsDay)
    return (
        <section className='section-hero'>
            <div className='hero-coluna1'>
                <div className='div-jogo-principal'>
                    <img src={eventsDay[0]?.strThumb} alt={eventsDay[0]?.strEvent} />
                    <h2>{eventsDay[0]?.strEvent}</h2>
                    <p>{eventsDay[0]?.strLeague}</p>
                </div>

                <div className="div-todos-jogos">
                    { eventsDay
                    .map((eventDay) => {
                        return (
                            <div className='div-jogos'>
                                <img src={eventDay?.strThumb} alt={eventDay?.strEvent} />
                                <h2>{eventDay?.strEvent}</h2>
                                <p>{eventDay?.strLeague}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='hero-coluna2'>
                <h2>Classificação</h2>
            </div>
        </section>
    )
}