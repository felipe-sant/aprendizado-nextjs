"use client";

import { useState } from "react"

export default function CalculoImc() {
    const [altura, setAltura] = useState<String>('')
    const [peso, setPeso] = useState<String>('')
    const [imc, setImc] = useState<String>('')

    const calcularIMC = () => {
        let alturaMetro = Number(altura) / 100
        let imc = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2)
        setImc(imc)
    }

    return (
        <>
            <div>
                <label htmlFor="peso">Peso (kg):</label>
                <input
                    id="peso"
                    name="peso"
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Peso"
                    type="number"
                />
            </div>
            <div>
                <label htmlFor="altura">Altura (cm):</label>
                <input
                    id="altura"
                    name="altura"
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Altura"
                    type="number"
                />
            </div>
            <button onClick={calcularIMC}>Calular imc</button>
            <p>Seu indíce de massa corpotal é: {imc} </p>
        </>
    )
}