import Image from 'next/image'

export default function Home() {
    return (
        <main className='main-block'>
            <h1>Advice # {}</h1>
            <p>{"lorem"}</p>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div>
            <Image src={'./'} alt={'qwe'}></Image>
            <button>
                <Image src={'./'} alt={'qwe'}></Image>
            </button>
        </main>
    )
}
