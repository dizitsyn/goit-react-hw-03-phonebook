import React from 'react'

export default function Filter({filterHandler,filter}) {
    return (
        <label>find
        <input
            value = {filter}
            onChange={filterHandler} />
        </label>
    )
}
