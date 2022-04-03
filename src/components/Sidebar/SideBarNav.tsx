import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SideBarNav () {
    return (
        <Stack spacing={12} align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} href="/dashboard" children="Dashboard" />
                    <NavLink icon={RiContactsLine} href="/users" children="Usuários" />
                </NavSection>
                <NavSection title="AUTOMACAO">
                    <NavLink icon={RiInputMethodLine} href="/forms" children="Formularios" />
                    <NavLink icon={RiGitMergeLine} href="/automation" children="Automaçao" />
                </NavSection>
            </Stack>
    )
}