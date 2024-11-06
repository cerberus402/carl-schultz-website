import { Anchor, Checkbox, Group, Progress, Table, Text } from "@mantine/core";
import { Forms, selectedFormRows } from "../FormSignals";

export const FormTable = () => {
  const rows = [
    Forms.value.map((form) => {
      const { formName, author, createdDate, lastEditedDate } = form;
      return (
        <Table.Tr key={formName}>
          <Table.Td>
            <Checkbox
              //checked={selectedFormRows.value.includes(form.formId)}
              onChange={() => {
                let selectedRows = [...selectedFormRows.value];
                if (!selectedRows.includes(form.formId)) {
                  selectedRows.push(form.formId);
                } else {
                  selectedRows = selectedRows.filter(
                    (id) => id !== form.formId
                  );
                }
                selectedFormRows.value = selectedRows;
              }}
            />
          </Table.Td>
          <Table.Td>
            <Anchor component="button" onClick={(e) => console.log(e.target)}>
              {formName}
            </Anchor>
          </Table.Td>
          <Table.Td>{author}</Table.Td>
          <Table.Td>
            {new Date(createdDate).toLocaleDateString("en-US", "long")}
          </Table.Td>
          <Table.Td>{lastEditedDate}</Table.Td>
        </Table.Tr>
      );
    }),
  ];

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Form Name</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Created Date</Table.Th>
            <Table.Th>Last Edited</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};
