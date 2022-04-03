import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SideBarNav () {
    return (
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
    )
}