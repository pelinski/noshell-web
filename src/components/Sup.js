import React from 'react'

export const Sup = ({ id }) => <sup><a href={`#fn${id}`}>{id}</a></sup>
export const FootNote = ({ id, children }) => <span id={`fn${id}`}><sup>{id}</sup> {children}</span>