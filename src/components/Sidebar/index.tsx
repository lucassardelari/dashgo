import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing={12} align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} children="Dashboard" />
                    <NavLink icon={RiContactsLine} children="Usuários" />
                </NavSection>
                <NavSection title="AUTOMACAO">
                    <NavLink icon={RiInputMethodLine} children="Formularios" />
                    <NavLink icon={RiGitMergeLine} children="Automaçao" />
                </NavSection>
            </Stack>
        </Box>
    )
}