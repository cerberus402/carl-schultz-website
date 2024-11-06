import {
  Anchor,
  Card,
  CardSection,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import classes from "./ActionsGrid.module.css";

const mockdata = [
  { title: "Credit cards", color: "violet" },
  { title: "Banks nearby", color: "indigo" },
  { title: "Transfers", color: "blue" },
];

export const FormBuilder = () => {
  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <div className="page-content">
      <SimpleGrid cols={3} mt="md">
        {mockdata.map((card) => {
          return (
            <Card withBorder radius="md" className={classes.card}>
              <CardSection>{card.title}</CardSection>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
};
