import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TournamentList } from "./tournament/TournamentList";
import { TournamentCreate } from "./tournament/TournamentCreate";
import { TournamentEdit } from "./tournament/TournamentEdit";
import { TournamentShow } from "./tournament/TournamentShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { MatchStatusList } from "./matchStatus/MatchStatusList";
import { MatchStatusCreate } from "./matchStatus/MatchStatusCreate";
import { MatchStatusEdit } from "./matchStatus/MatchStatusEdit";
import { MatchStatusShow } from "./matchStatus/MatchStatusShow";
import { MapDraftList } from "./mapDraft/MapDraftList";
import { MapDraftCreate } from "./mapDraft/MapDraftCreate";
import { MapDraftEdit } from "./mapDraft/MapDraftEdit";
import { MapDraftShow } from "./mapDraft/MapDraftShow";
import { MapDraftStatusList } from "./mapDraftStatus/MapDraftStatusList";
import { MapDraftStatusCreate } from "./mapDraftStatus/MapDraftStatusCreate";
import { MapDraftStatusEdit } from "./mapDraftStatus/MapDraftStatusEdit";
import { MapDraftStatusShow } from "./mapDraftStatus/MapDraftStatusShow";
import { StreamerList } from "./streamer/StreamerList";
import { StreamerCreate } from "./streamer/StreamerCreate";
import { StreamerEdit } from "./streamer/StreamerEdit";
import { StreamerShow } from "./streamer/StreamerShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { MapList } from "./map/MapList";
import { MapCreate } from "./map/MapCreate";
import { MapEdit } from "./map/MapEdit";
import { MapShow } from "./map/MapShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
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
        title={"Mastersclash API"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Tournament"
          list={TournamentList}
          edit={TournamentEdit}
          create={TournamentCreate}
          show={TournamentShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="MatchStatus"
          list={MatchStatusList}
          edit={MatchStatusEdit}
          create={MatchStatusCreate}
          show={MatchStatusShow}
        />
        <Resource
          name="MapDraft"
          list={MapDraftList}
          edit={MapDraftEdit}
          create={MapDraftCreate}
          show={MapDraftShow}
        />
        <Resource
          name="MapDraftStatus"
          list={MapDraftStatusList}
          edit={MapDraftStatusEdit}
          create={MapDraftStatusCreate}
          show={MapDraftStatusShow}
        />
        <Resource
          name="Streamer"
          list={StreamerList}
          edit={StreamerEdit}
          create={StreamerCreate}
          show={StreamerShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Map"
          list={MapList}
          edit={MapEdit}
          create={MapCreate}
          show={MapShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
      </Admin>
    </div>
  );
};

export default App;
