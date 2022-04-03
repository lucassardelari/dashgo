import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Lucas Sardelari</Text>
                <Text color="gray.300" fontSize="small">
                    lucas@sardelari.com
                </Text>
            </Box>
            <Avatar size="md" name="Lucas Sardelari" src="https://github.com/lucassardelari.png" />
        </Flex>
    )
}