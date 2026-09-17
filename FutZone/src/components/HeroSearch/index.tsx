import { useState } from 'react'
import './hero-search.css'
import tungtung from '../../assets/tungtung.png'


type Player = {
    strPlayer: string
    strTeam: string
    strCutout: string
    strNationality: string
}



export function HeroSearch() {
    const [player, setPlayer] = useState<Player | null>(null)
    async function handleSearchPlayer(formData) {
        const playerSearch = formData.get('input-player')
        const resp = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${playerSearch}`)
        const respJson = await resp.json()

        console.log(respJson)
        if(respJson.player) {
            setPlayer(respJson.player[0])
        } else {
            setPlayer(null)
        }
        
    }

    return (
        <section className="section-hero-search">
            <form action={handleSearchPlayer} className='form-search'>
                <div>
                    <input type="text" placeholder='Procure por um jogador' name='input-player' />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                    </button>
                </div>
            </form>

            { player ? (
                <div className='div-player'>
                    { player.strCutout ? (
                        <img src={player.strCutout} alt={player.strPlayer} />
                    ) : (
                        <img src={tungtung} alt="TungTung" />
                    )}
                    
                    <h3>{player.strPlayer}</h3>
                    <div>
                        <span>{player.strTeam}</span>
                        <span>{player.strNationality}</span>
                    </div>
                </div>
            ): (
                <h4 className='nenhum-jogador'>Nenhum jogador encontrado</h4>
            )}
        </section>
    )
}