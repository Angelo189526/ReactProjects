import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App () {
    return (
    <section className='App'>

        <TwitterFollowCard userName="pheralb">
        Pablo Antonio
        </TwitterFollowCard>


        <TwitterFollowCard userName="DaniloJA">
        Daniel Motaño
        </TwitterFollowCard>
        
    </section>
    )
}

