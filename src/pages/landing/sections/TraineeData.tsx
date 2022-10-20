import { Flex, Link, Image, VStack, Heading, Box } from '@chakra-ui/react'
import Classroom from '../../../assets/classroom.png'
import Github from '../../../assets/github.png'
import Codewars from '../../../assets/codewars.png'
import Schology from '../../../assets/schoology.png'


function TraineeData() {
    return (
        <VStack w='full' h={{base:'550px',md:'700px'}} display='flex' justifyContent='center' alignItems='center' >
            <Box maxW='940px' w={{base:'97vw', md:'60vw'}}>
                <Heading fontSize={{base:'28px',md:'40px'}}  textAlign={'center'} pb="1.5em" color='#2A87A9'>
                    Automatically enrich trainee data with pre-built or custom integrations
                </Heading>
            </Box>
            <Flex bg='#EFFAFE' maxW='940px' width={'full'} h={{base:'140px',md:'180px'}} justifyContent='space-evenly' alignItems='center' >
                <Link>
                    <Image src={Classroom} alt='classroom' boxSize={{base:'60px', md:'100px'}} objectFit="cover" />
                </Link >
                <Link>
                    <Image src={Github} alt='github' boxSize={{base:'60px', md:'100px'}} />
                </Link >
                <Link>
                    <Image src={Codewars} alt='codewars' boxSize={{base:'60px', md:'100px'}} />
                </Link >
                <Link>
                    <Image src={Schology} alt='schology' boxSize={{base:'60px', md:'100px'}} />
                </Link >
            </Flex>

        </VStack >
    )
}

export default TraineeData