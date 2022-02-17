import React, { useEffect, useState } from 'react'
import { Modal } from './Modal'

export const EffectExample = () => {
    
    const [ativo, setAtivo] = useState(false)

    return (
        <div>
            {ativo && <Modal/>}
            <button onClick={() => {setAtivo(!ativo)}}>Ativar</button>
        </div>
    )
}
