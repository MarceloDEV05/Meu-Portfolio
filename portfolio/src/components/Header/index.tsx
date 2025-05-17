import { useState } from 'react'

export const Header = () => {
   
    return(
        <header className="flex justify-center items-center bg-[#0a0a0a] text-white h-12 border-b border-gray-600">
            <ul className="flex gap-20 items-center">
                <li>Sobre</li>
                <li>Projetos</li>
                <h1 className="text-3xl">M.C</h1>
                <li>Contatos</li>
                <li>GitHub</li>
            </ul>

            <button 
            className="right-0 h-8 rounded-full flex fixed mr-20 border w-18">
                <div className="w-8 h-[31px] border flex items-center justify-center right-0 absolute rounded-full"></div>
            </button>
        </header>
    )
}