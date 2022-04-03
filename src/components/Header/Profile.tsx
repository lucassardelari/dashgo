import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Lucas Sardelari</Text>
                    <Text color="gray.300" fontSize="small">
                        lucas@sardelari.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Lucas Sardelari" src="https://github.com/lucassardelari.png" />
        </Flex>
    )
}