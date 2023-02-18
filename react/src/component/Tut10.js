import React from 'react'

function mapping() {
    const names = ["hana","saman","samanisreal"]
    const retnames = names.map(x=><h1>{x}</h1>)
return  <div>{retnames}</div>
}
export default mapping