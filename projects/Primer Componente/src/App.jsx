import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App () {
    return (
    <section className='App'>

        <TwitterFollowCard isFollowing userName="pheralb">
        Pablo Antonio
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing={false} userName="DaniloJA">
        Daniel Motaño
        </TwitterFollowCard>
        
    </section>
    )
}

