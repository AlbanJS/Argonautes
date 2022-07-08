import Form from './Component/Form/Form';
import ListMember from './Component/ListMember/ListMember';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    return (
        <>
            <header>
                <h1>
                    <img
                        src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
                        alt="Wild Code School logo"/>
                    Les Argonautes
                </h1>
            </header>

            <main>

                <h2>Ajouter un(e) Argonaute</h2>
                <Form/>

                <h2>Membres de l'équipage</h2>
                <ListMember />
            </main>

            <footer>&
                <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
            </footer>
        </>
    );
}

export default App;
