import './App.css'; // Import your CSS file here

import {
  Spinner
} from "@fluentui/react-components";
import { useTeams } from "@microsoft/teamsfx-react";

import { TeamsFxContext } from "./internal/context";
import Router from './routes/routes';
import ThemeProvider from './theme';

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading, themeString } = useTeams()[0];
  return (
    // <div className="full-width-container">
    <TeamsFxContext.Provider value={{ themeString }}>
    {/* <FluentProvider id="fluent-provider" style={{ width: '100%', height: '100%', overflow: 'hidden' }}> */}
      <ThemeProvider>
          {loading ? (
            <Spinner id="spinner" />
          ) : (
             <Router/>
          )}
       </ThemeProvider>
      {/* </FluentProvider> */}
    </TeamsFxContext.Provider>
    // </div>

  );
}
