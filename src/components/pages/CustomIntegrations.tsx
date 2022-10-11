import React from 'react'
import { Flex, Text, Box,Link,Image,VStack  } from '@chakra-ui/react'
import Classroom from '../../assets/classroom.png'
import Github from '../../assets/github.png'
import Codewars from '../../assets/codewars.png'
import Schology from '../../assets/schoology.png'


function ProductTour() {
    return ( 
        <VStack w='100%' bg='blue.600' h='450px' display='flex' justifyContent='center' alignItems='center' >
            <Text color='#2A87A9' fontSize={['xl','2xl','3xl','4xl']} w={['60%','50%']} align='center' as='b' >Automatically enrich trainee data with pre-built or custom integrations</Text>
            <Flex bg='#EFFAFE' width={['100%','90%']} h='180px' justifyContent='space-around' alignItems='center' >
                
                <Link>
                    <Image src={Classroom} alt='classroom' boxSize={['40px','60px','80px','100px']}/>
                </Link >
                <Link>
                    <Image src={Github} alt='github'boxSize={['40px','60px','80px','100px']}/>
                </Link > <Link>
                    <Image src={Codewars} alt='codewars'boxSize={['40px','60px','80px','100px']}/>
                </Link > <Link>
                    <Image src={Schology} alt='schology'boxSize={['40px','60px','80px','100px']}/>
                </Link >
            </Flex>

        </VStack >
    )
}

export default ProductTour