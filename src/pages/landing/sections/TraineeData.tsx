import { Flex, Text,Link,Image,VStack  } from '@chakra-ui/react'
import Classroom from '../../../assets/classroom.png'
import Github from '../../../assets/github.png'
import Codewars from '../../../assets/codewars.png'
import Schology from '../../../assets/schoology.png'


function TraineeData() {
    return ( 
        <VStack px='100px' w='100%'  h='450px' display='flex' justifyContent='center' alignItems='center' >
            <Text color='#2A87A9' fontSize={'32'} w={['70%','50%']} align='center' as='b' >Automatically enrich trainee data with pre-built or custom integrations</Text>
            <Flex bg='#EFFAFE' width={'70%'} h='180px' justifyContent='space-around' alignItems='center' >
                
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

export default TraineeData