import { Flex, Link, Image, VStack, Heading, Box } from '@chakra-ui/react'
import Classroom from '../../../assets/classroom.png'
import Github from '../../../assets/github.png'
import Codewars from '../../../assets/codewars.png'
import Schology from '../../../assets/schoology.png'


function TraineeData() {
    return (
        <VStack w='full' h='700px' display='flex' justifyContent='center' alignItems='center' >
            <Box w='60vw' >
                <Heading fontSize={'40px'} textAlign={'center'} pb="1.5em" color='#2A87A9'>
                    Automatically enrich trainee data with pre-built or custom integrations
                </Heading>
            </Box>
            <Flex bg='#EFFAFE' w='80vw' h='180px' justifyContent='space-around' alignItems='center' >
                <Link>
                    <Image src={Classroom} alt='classroom' boxSize={['40px', '60px', '80px', '100px']} objectFit="cover" />
                </Link >
                <Link>
                    <Image src={Github} alt='github' boxSize={['40px', '60px', '80px', '100px']} />
                </Link >
                <Link>
                    <Image src={Codewars} alt='codewars' boxSize={['40px', '60px', '80px', '100px']} />
                </Link >
                <Link>
                    <Image src={Schology} alt='schology' boxSize={['40px', '60px', '80px', '100px']} />
                </Link >
            </Flex>

        </VStack >
    )
}

export default TraineeData