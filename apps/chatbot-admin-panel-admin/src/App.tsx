import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BotConfigurationList } from "./botConfiguration/BotConfigurationList";
import { BotConfigurationCreate } from "./botConfiguration/BotConfigurationCreate";
import { BotConfigurationEdit } from "./botConfiguration/BotConfigurationEdit";
import { BotConfigurationShow } from "./botConfiguration/BotConfigurationShow";
import { ConversationFlowList } from "./conversationFlow/ConversationFlowList";
import { ConversationFlowCreate } from "./conversationFlow/ConversationFlowCreate";
import { ConversationFlowEdit } from "./conversationFlow/ConversationFlowEdit";
import { ConversationFlowShow } from "./conversationFlow/ConversationFlowShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ChatbotAdminPanel"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BotConfiguration"
          list={BotConfigurationList}
          edit={BotConfigurationEdit}
          create={BotConfigurationCreate}
          show={BotConfigurationShow}
        />
        <Resource
          name="ConversationFlow"
          list={ConversationFlowList}
          edit={ConversationFlowEdit}
          create={ConversationFlowCreate}
          show={ConversationFlowShow}
        />
      </Admin>
    </div>
  );
};

export default App;
