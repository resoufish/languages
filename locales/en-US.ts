import Language from "@bot/structures/Language";
import { GuildModal } from "@lib/types";
import { ClientUser, Guild } from "discord.js";
import { NodeStats } from "shoukaku";

export default class EnglishUs extends Language {
  constructor() {
    super();

    this.translations = {
      ERROR: (error: any) =>
        `An error occurred\nError message: \`${error.message}\``,
      PING: {
        PLEASE_WAIT: () => "Please wait...",
        MESSAGE: (ws: number, ping: number, db: number) =>
          `* WebSocket Latency > \`${ws}ms\`\n` +
          `* Latency > \`${ping}ms\`\n` +
          `* Database (Aria) Latency > \`${db}ms\``,
      },
      SETTINGS: {
        GUILD_NOT_FOUND: () =>
          "Could not find the server in the database, please try again later.",
        MUSIC_CONFIG_NOT_FOUND: () =>
          "No music module configuration data found in the database. Please contact support.",
        UNKNOWN_SUBCOMMAND: () => "Unknown subcommand.",
      },
      SETTINGS_EMBED: {
        EMBED_COLOR_SET: (hex: string) =>
          `Embed color set to ${hex === "default" ? "default" : `#${hex}`}.`,
        EMBED_ICON_SET: (type: string) =>
          `Embed icon type set to ${
            type === "default" ? "default" : type === "none" ? "none" : "big"
          }.`,
      },
      SETTINGS_LANGUAGE: {
        LANGUAGE_SET: (locale: string) =>
          `Bot language set to ${locale === "en-US" ? "English" : locale}.`,
      },
      SETTINGS_VIEW: {
        VIEW_GUILD: (guild: Guild) => `Server settings for ${guild.name}`,
        VIEW_DESC: (guild: GuildModal) => {
          const locale = guild.locale === "ru" ? "Русский" : "English";
          const embedColor =
            guild.musicConfig?.embedColor === "default"
              ? "Default"
              : `#${guild.musicConfig?.embedColor}`;
          const livePlayerStatus = guild.musicConfig?.livePlayer.enabled
            ? "Enabled"
            : "Disabled";
          const livePlayerChannel =
            guild.musicConfig?.livePlayer.channelId ?? "Not Set";
          const searchEngine =
            guild.musicConfig?.engine.provider ?? "Not Specified";
          const artWorkType = guild.musicConfig?.artWorkType ?? "Not Specified";
          const nowPlayingStatus = guild.musicConfig?.nowPlayingPlayer.enabled
            ? "Enabled"
            : "Disabled";
          const analyticsStatus = guild.musicConfig?.analytics.enabled
            ? "Enabled"
            : "Disabled";
          const trackCount = guild.musicConfig?.analytics.tracks.length ?? 0;

          return `
        # Main Settings >
        \`\`\`Language: ${locale}\`\`\`
        
        # Music Settings >
        \`\`\`Embed Color: ${embedColor}\n
        Live Player: ${livePlayerStatus}\n
        Live Player Channel: ${livePlayerChannel}\n
        Search Engine: ${searchEngine}\n
        Artwork Type: ${artWorkType}\n
        NowPlaying Message: ${nowPlayingStatus}\n
        Listening Analytics: ${analyticsStatus}\n
        Analytics Tracks: ${trackCount}\`\`\`
          `;
        },
      },
      SETTINGS_PLAYER: {
        MESSAGE_SEND: (send: boolean) =>
          `Player message send option set to ${
            send === true ? "Enabled" : "Disabled"
          }.`,
        SEARCH_ENGINE_SET: (engine: string) =>
          `Player search engine set to ${engine}.`,
      },
      SETTING_ANALYTICS: {
        ENABLED_SET: (enable: boolean) =>
          `Analytics option set to ${
            enable === true ? "Enabled" : "Disabled"
          }.`,
        REMOVE_TRACKS: () => "Analytics data removed.",
      },
      SETTINGS_LIVEPLAYER: {
        ENABLED_SET: (enable: boolean) =>
          `Live Player option set to ${
            enable === true ? "Enabled" : "Disabled"
          }.`,
        CHANNEL_SET: (channel: string) =>
          `Live Player channel set to: <#${channel}>.`,
        CHANNEL_IS_NOT_TEXT: () =>
          "The selected channel is not a text channel.",
      },
      STATS: {
        AUTHOR_NAME: (client: ClientUser, version: string) =>
          `Statistics of ${client.username} | v${version}`,
        DESC: (
          cache_guilds: number,
          guilds: number,
          cache_users: number,
          users: number,
          used_memory: number,
          total_memory: number,
          unix_timestamp_time: number
        ) => {
          return `Servers > \`${cache_guilds} / ${guilds}\`\nUsers > \`${cache_users} / ${users}\`\n\nMemory > \`${used_memory} / ${total_memory}\`\nUptime > <t:${unix_timestamp_time}:R>`;
        },
        NODE_FIELD: (stats: NodeStats) => {
          return `Players > \`${stats.players}\`\nActive Players > \`${
            stats.playingPlayers
          }\`\nUptime > <t:${Math.floor(
            Date.now() / 1000 - stats.uptime / 1000
          )}:R>\nMemory > \`${(stats.memory.used / 1024 / 1024).toFixed(
            2
          )} / ${(stats.memory.free / 1024 / 1024).toFixed(2)}\``;
        },
      },
    };
  }
}
