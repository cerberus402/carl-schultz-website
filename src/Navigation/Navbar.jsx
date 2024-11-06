import {
  faBook,
  faHome,
  faLeaf,
  faMoon,
  faSun,
  faTachographDigital,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Center,
  Drawer,
  Group,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import classes from "./Navbar.module.css";
import { selectedNavItem } from "./NavigationSignals";

export const Navbar = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  const navLinks = [
    {
      icon: faBook,
      label: "Entries",
    },
    {
      icon: faTachographDigital,
      label: "Forms",
    },
  ];

  function NavbarLink({ icon, label, active, onClick }) {
    return (
      <Tooltip
        label={label}
        position="right"
        transitionProps={{ duration: 350 }}
        disabled={opened}
      >
        <UnstyledButton
          className={classes.link}
          onClick={onClick}
          data-active={active || undefined}
        >
          <FontAwesomeIcon icon={icon} />
          {opened && <Text ml="md">{label}</Text>}
        </UnstyledButton>
      </Tooltip>
    );
  }

  const navbarContent = (
    <>
      <Center>
        <Tooltip
          label={"Oxygen"}
          position="right"
          transitionProps={{ duration: 350 }}
          disabled={opened}
        >
          <Group>
            <FontAwesomeIcon fontSize={32} icon={faLeaf} />
          </Group>
        </Tooltip>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={20}>
          {navLinks.map((link, index) => (
            <NavbarLink
              key={link.label + selectedNavItem.value}
              {...link}
              active={link.label === selectedNavItem.value}
              onClick={() => {
                selectedNavItem.value = navLinks[index].label;
              }}
            />
          ))}
        </Stack>
      </div>

      <Stack>
        <UnstyledButton
          className={classes.link}
          onClick={() => toggleColorScheme()}
        >
          <Group>
            <FontAwesomeIcon icon={colorScheme === "dark" ? faSun : faMoon} />
            {opened && (
              <Text>{colorScheme === "dark" ? "Light mode" : "Dark mode"}</Text>
            )}
          </Group>
        </UnstyledButton>
      </Stack>
    </>
  );

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="sm"
        position="left"
        classNames={{
          content: classes.drawerContent,
        }}
      >
        {navbarContent}
      </Drawer>
      <nav className={classes.navbar}>{navbarContent}</nav>
    </>
  );
};
