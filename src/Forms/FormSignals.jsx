import { effect, signal } from "@preact/signals-react";

// #region View Forms Signals
export const selectedFormView = signal("All Forms");
export const selectedFormRows = signal([]);
effect(() => {
  console.log(selectedFormView.value);
});

export const Forms = signal([
  {
    formId: "01J7VK1ZBFR6B2F8HFFZV2943B",
    formName: "Default Sample Form",
    formFields: [{}],
    createdDate: "9/15/2024 2:30:00",
    lastEditedDate: "9/15/2024 2:30:00",
    author: "Carl Schultz",
  },
]);
// #endregion View Forms Signals
