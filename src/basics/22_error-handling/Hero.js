import React from 'react'

export default function Hero({ hero }) {
    if (hero === "jimes bondz") {
        throw new Error('this is not a hero')
    }
    return (
        <div>
            <h1>{hero}</h1>
        </div>
    )
}
