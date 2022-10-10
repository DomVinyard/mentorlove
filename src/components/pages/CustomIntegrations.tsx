import React from 'react'
import { Flex, Text, Box,Link,Image,VStack  } from '@chakra-ui/react'
import Classroom from '../../assets/classroom.png'
import Github from '../../assets/github.png'
import Codewars from '../../assets/codewars.png'
import Schology from '../../assets/schoology.png'


function ProductTour() {
    return ( 
        <VStack w='100%' bg='blue.600' h='450px' display='flex' justifyContent='center' alignItems='center' >
            <Text color='#2A87A9' fontSize='35px' >Automatically enrich trainee data with pre-built or custom integrations</Text>
            <Flex bg='#EFFAFE' width='90%' h='180px' justifyContent='space-around' alignItems='center' >
                
                <Link>
                    <Image src={Classroom} alt='classroom' boxSize={['100px','80px','60px','40px']}/>
                </Link >
                <Link>
                    <Image src={Github} alt='github' boxSize='100px'/>
                </Link > <Link>
                    <Image src={Codewars} alt='codewars' boxSize='100px'/>
                </Link > <Link>
                    <Image src={Schology} alt='schology' boxSize='100px'/>
                </Link >
            </Flex>

        </VStack >
    )
}

export default ProductTour