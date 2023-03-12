import { useState } from "react";

import { Box, Container, Flex, Link, Stack } from "@chakra-ui/react";



function Navbar() {
  const NAV_ITEMS = [
    { 
      label: "Home",
      href: "/",
    },
    {
      label: "Food",
      href: "/food",
    },
    {
      label: "Recommendations",
      href: "/recommendations",
    },
  ];
  
  function NavLinks({ navItems }) {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        width={{ base: "full", md: "auto" }}
        align="center"
        justify= "center"
      >
        {navItems.map((navItem) => (
          <NavItem label={navItem.label} href={navItem.href} />
        ))}

      </Stack>
    );
  }
  
  function NavItem({ label, href }) {
    return (
      <Box>
        <Link href={href} px="10" fontWeight="600">
            {label}
        </Link>
      </Box>
    );
  }

  return (
      <NavLinks navItems={NAV_ITEMS} />
  )
}

export default Navbar;
