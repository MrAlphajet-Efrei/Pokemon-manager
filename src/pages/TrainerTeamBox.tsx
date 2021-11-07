import { collection, doc, DocumentData, onSnapshot } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { db } from '../firebase';
import { FirebaseTeamFormat } from '../types/pokeType';

function TrainerTeamBox() {
    const [box, setBox] = useState()

    useEffect(() => {
        const res = GetBoxInfos()
        console.log(res)
    }, [])

    const GetBoxInfos = () => {
        let RequestArray:DocumentData[] = []
        onSnapshot(collection(db, "FightTeams"), (snapshot) => {
            RequestArray = snapshot.docs.map(doc => doc.data())
        })
        RequestArray.forEach(doc => console.log(doc))
        return RequestArray
    }
    return (
        <BoxTeamsContainer>
            <BoxContainer>

            </BoxContainer>
        </BoxTeamsContainer>
    )
}

export default TrainerTeamBox

const BoxTeamsContainer = styled.div`
    ${tw`
        flex
        flex-col
        place-self-center
        items-center
        bg-gray-200
        h-[80%]
        w-full
        mt-24
    `}
`;
const BoxContainer = styled.div`
    ${tw`
        flex
        flex-col
        bg-gradient-to-r from-blanc2 to-color-type-water
        w-[80%]
        h-auto
        p-5
    `}
`