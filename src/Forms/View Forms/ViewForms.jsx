import { SegmentedControl } from "@mantine/core";
import "../../App.css";
import { selectedFormView } from "../FormSignals";
import { FormTable } from "./FormTable";
import classes from "./GradientSegmentedControl.module.css";

export const ViewForms = () => {
  return (
    <div className="page-content">
      <SegmentedControl
        radius="xl"
        size="md"
        data={["All Forms", "My Forms", "Shared With Me"]}
        classNames={classes}
        value={selectedFormView.value}
        onChange={(e) => (selectedFormView.value = e)}
      />
      <FormTable />
    </div>
  );
};
