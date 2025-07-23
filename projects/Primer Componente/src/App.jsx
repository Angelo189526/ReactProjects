import './App.css'

export function App () {
    return (
 <article className="tw-followCard">
    <header className="tw-followCard-header">
        <img  
        className="tw-followCard-avatar"
        src="https://unavatar.io/sindresorhus@gmail.com" 
        alt="Avatar de la persona" />
        <div className="tw-followCard-info">
            <strong>Daniel Felipe Castaño</strong>
            <span className="tw-followCard-infoUserName">@DaniLo</span>
        </div>
    </header>
    <aside>
        <button className='tw-followCard-button'>
            Seguir
        </button>
    </aside>
 </article>
    )
}

