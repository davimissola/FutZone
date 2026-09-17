import './hero.css'
// importar type dessa maneira
import type { typeEventsDay }from '../../types'
import campoImagem from '../../assets/campo.png'
import { useEffect, useState } from 'react'


type typeHeroProps = {
    eventsDay: typeEventsDay[]
}
type typeTabela = {
    intRank: string
    strTeam: string
    strBadge: string
    intPoints: string
}

                                // props tem que ser tipada desse jeito
export function Hero({ eventsDay }: typeHeroProps) {

    const [tabelaAtual, setTabelaAtual] = useState<typeTabela[]>([])
    useEffect(() => {
        async function mostrarTabela() {
            const resp = await fetch('https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4328')
            const respJson = await resp.json()
            setTabelaAtual(respJson.table)
        }
        mostrarTabela()
    }, [])
    return (
        <section className='section-hero'>
            <h2 className='h2-titulo-hero'>Jogos de <span>hoje</span></h2>
            <div className='div-hero'>
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
                                    { eventDay.strThumb ? (
                                        <img src={eventDay?.strThumb} alt={eventDay?.strEvent} />
                                    ) : (
                                        <img src={campoImagem} alt={eventDay?.strEvent} />
                                    )}           
                                    <h2>{eventDay?.strEvent}</h2>
                                    <p>{eventDay?.strLeague}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='hero-coluna2'>
                    <h2>Classificação</h2>
                    <div className='tabela-times'>
                        { tabelaAtual.map((timeAtual) => {
                            return (
                                <div className='linha-tabela'>
                                    <div>
                                        <img src={timeAtual.strBadge} alt={timeAtual.strTeam} />
                                        <p>{timeAtual.intRank}</p>
                                        <span>{timeAtual.strTeam}</span>
                                    </div>
                                    <span id='time-pontos'>{timeAtual.intPoints} Pts</span>
                                </div>
                            )
                        })}
                    </div>
                </div>  
            </div>
        </section>
    )
}