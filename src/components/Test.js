import React, { useState } from 'react'


function Test() {

    const [member, setMember] = useState(member)

    const [mem1, mem2, mem3, mem4] = accounts
    let id, picture, name;
    ({ id, picture, name } = mem1)
    console.log(id, picture, name)

    function chooseMemeber(event) {

    }
    const accounts = [
        { id: 1, picture: 'https://in.pinterest.com/pin/579416308304839742/', name: 'Lance Foster' },
        { id: 2, picture: 'https://in.pinterest.com/pin/579416308304839742/', name: 'Suzanne Nelson' },
        { id: 3, picture: 'https://in.pinterest.com/pin/579416308304839742/', name: 'Scarlett Bennett' },
        { id: 4, picture: 'https://in.pinterest.com/pin/579416308304839742/', name: 'Edwin Wood' }
    ]

    return (
        <div>

        </div>
    )
}

export default Test