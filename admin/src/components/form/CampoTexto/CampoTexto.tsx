//@ts-ignore
import styles from './CampoTexto.module.css'
import { SetStateAction, useEffect, useState } from 'react'
import classNames from 'classnames'
import React from 'react'

interface CampoProps {
    label?: string
    type?: 'text' | 'email' | 'password' | 'phone' | 'textarea'
    pattern?: string
    placeholder?: string
    obrigatorio?: boolean
    valor: string
    setValor: React.Dispatch<SetStateAction<string>>
    tamanho?: 'maior' | 'menor' | number
}

export default function CampoTexto({ label, placeholder, type = 'text', pattern, obrigatorio, valor, setValor, tamanho }: CampoProps) {
    
    function inicialMaiuscula(str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const nomeCampo = inicialMaiuscula(label || '')

    if (type === 'textarea') {
        return (
            <label  className={classNames(styles.campo, styles.textarea)}>
                <span className={styles.label}>
                    {nomeCampo}
                    {obrigatorio && ' *' }
                </span>
                <textarea
                    className={styles.input}
                    required={obrigatorio}
                    value={valor}
                    onChange={evt => setValor(evt.target.value)}
                    style={{
                        minHeight: typeof tamanho === 'number' ? `${tamanho}px` : ''
                    }}
                />
            </label>
        )
    }

    return (
        <label className={classNames(styles.campo, styles[tamanho])}>
            <span className={styles.label}>
                {nomeCampo}
                {obrigatorio && ' *' }
            </span>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                required={obrigatorio}
                pattern={pattern}
                value={valor}
                onChange={evt => setValor(evt.target.value)}
            />
        </label>
    )
}
