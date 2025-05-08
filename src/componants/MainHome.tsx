import { useState } from 'react'

function Main() {
    // Pas de blague affichée avant d'appuyer sur le bouton
    const [joke, setJoke] = useState('Blague dans 3... 2... 1...')
    const getJoke = () => {
        // Pas d'API mise en place donc test avec une blague écrit directement dans le code
        const respApi = {
            joke: 'Quel est le sport le plus silencieux ? Le para-chuuuut'
        };
        setJoke(respApi.joke);
    };

    return (
        <>
            <main className='bgMain max-w-full lg:h-auto h-[85vh] text-center flex flex-col justify-center items-center p-4 shadoxHeader'>

                <h1 className='text-red-600 textStroke px-10 text-2xl pb-18 lg:py-18 lg:text-4xl'>Le savais-tu ?
                    <br />
                    un Carambar = 1 blague = 1 sourire garanti !
                </h1>

                <h2 className='text-amber-900 h2t-6 px-4 pb-10 lg:text-2xl'>Clique sur le Carambar pour récupérer ton sourire !</h2>

                {/* Le container où va apparaître la blague */}
                <div className='bg-white w-[330px] h-[130px] lg:w-[650px] lg:h-[200px] md:w-[650px] md:h-[200px] flex flex-col justify-center rounded-3xl px-4 lg:px-6 shadow'>
                    <p className='text-base lg:text-xl'>{joke}</p>
                </div>

                {/* Bouton en forme de Carambar */}
                <button onClick={getJoke} className='cursor-pointer w-3/5 lg:w-1/5 md:max-w-[300px] lg:hover:scale-110 lg:transition-transform lg:duration-300 pt-6 pb-0 lg:py-10'>
                    <img src="mini-carambar.webp" alt="bouton pour afficher une blague" />
                </button>
            </main>
        </>
    );
}
export default Main;