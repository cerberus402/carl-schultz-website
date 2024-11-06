import { MantineProvider } from "@mantine/core";
import { useSignals } from "@preact/signals-react/runtime";
import { ulid } from "ulid";
import "./App.css";
import { If } from "./Components/If";
import { ViewEntries } from "./Entries/ViewEntries";
import { ViewForms } from "./Forms/View Forms/ViewForms";
import { Navbar } from "./Navigation/Navbar";
import { selectedNavItem } from "./Navigation/NavigationSignals";

function App() {
  useSignals();

  return (
    <MantineProvider defaultColorScheme="dark">
      <div className="main-content">
        <Navbar />
        <If condition={selectedNavItem.value === "Entries"}>
          <ViewEntries />
        </If>
        <If condition={selectedNavItem.value === "Forms"}>
          <ViewForms />
        </If>
      </div>
    </MantineProvider>
  );
}

export default App;
