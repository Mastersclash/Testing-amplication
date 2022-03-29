import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TournamentModule } from "./tournament/tournament.module";
import { SessionModule } from "./session/session.module";
import { GameModule } from "./game/game.module";
import { MatchModule } from "./match/match.module";
import { MatchStatusModule } from "./matchStatus/matchStatus.module";
import { MapDraftModule } from "./mapDraft/mapDraft.module";
import { MapDraftStatusModule } from "./mapDraftStatus/mapDraftStatus.module";
import { StreamerModule } from "./streamer/streamer.module";
import { TeamModule } from "./team/team.module";
import { PlayerModule } from "./player/player.module";
import { MapModule } from "./map/map.module";
import { AssetModule } from "./asset/asset.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    TournamentModule,
    SessionModule,
    GameModule,
    MatchModule,
    MatchStatusModule,
    MapDraftModule,
    MapDraftStatusModule,
    StreamerModule,
    TeamModule,
    PlayerModule,
    MapModule,
    AssetModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
