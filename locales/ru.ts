import Kasumi from "@bot/structures/Client";
import Language from "@bot/structures/Language";
import { GuildModal } from "@lib/types";
import { ClientUser, Guild } from "discord.js";
import { NodeStats } from "shoukaku";

export default class RussianRu extends Language {
  constructor() {
    super();

    this.translations = {
      ERROR: (error: any) =>
        `Произашла ошибка\nСообщение ошибки: \`${error.message}\``,
      PING: {
        PLEASE_WAIT: () => "Пожалуйста подождите...",
        MESSAGE: (ws: number, ping: number, db: number) =>
          `* Задержка WebSocket > \`${ws}ms\`\n` +
          `* Задрежка > \`${ping}ms\`\n` +
          `* Задержка Datebase(Aria) > \`${db}ms\``,
      },
      SETTINGS: {
        GUILD_NOT_FOUND: () =>
          "Не удалось найти сервер в базеданных, попробуйте позже..",
        MUSIC_CONFIG_NOT_FOUND: () =>
          "В базеданных не было найдено данных о конфигурации модуля: **музыка**\nОбратитесь на сервер поддержки.",
        UNKNOWN_SUBCOMMAND: () => "Неизвестная подкоманда.",
      },
      SETTINGS_EMBED: {
        EMBED_COLOR_SET: (hex: string) =>
          `Цвет эмбеда установлен на #${
            hex === "default" ? "стандартный" : `#${hex}`
          }.`,
        EMBED_ICON_SET: (type: string) =>
          `Тип иконки плеера изменён на ${
            type === "default"
              ? "стандартную"
              : type === "none"
              ? "отсутствует"
              : "большую"
          }.`,
      },
      SETTINGS_LANGUAGE: {
        LANGUAGE_SET: (locale: string) =>
          `Язык бота установлен на ${locale === "ru" ? "Русский" : locale}.`,
      },
      SETTINGS_VIEW: {
        VIEW_GUILD: (guild: Guild) => `Настройки сервера ${guild.name}`,
        VIEW_DESC: (guild: GuildModal) => {
          const locale = guild.locale === "ru" ? "Русский" : "?";
          const embedColor =
            guild.musicConfig?.embedColor === "default"
              ? "Стандартный"
              : `#${guild.musicConfig?.embedColor}`;
          const livePlayerStatus = guild.musicConfig?.livePlayer.enabled
            ? "Включен"
            : "Выключен";
          const livePlayerChannel =
            guild.musicConfig?.livePlayer.channelId ?? "Не установлен";
          const searchEngine =
            guild.musicConfig?.engine.provider ?? "Не указана";
          const artWorkType = guild.musicConfig?.artWorkType ?? "Не указано";
          const nowPlayingStatus = guild.musicConfig?.nowPlayingPlayer.enabled
            ? "Включен"
            : "Выключен";
          const analyticsStatus = guild.musicConfig?.analytics.enabled
            ? "Включена"
            : "Выключена";
          const trackCount = guild.musicConfig?.analytics.tracks.length ?? 0;

          return `* Основные настройки\n\`\`\`ts\nЯзык: ${locale}\`\`\`\n* Музыкальные настройки\n\`\`\`ts\nЦвет эмбеда: ${embedColor}\nLive Player: ${livePlayerStatus}\nКанал Live Player'а: ${livePlayerChannel}\nПоисковая система: ${searchEngine}\nТип отображения обложки: ${artWorkType}\nСообщение NowPlaying: ${nowPlayingStatus}\nАналитика прослушивания: ${analyticsStatus}\nТреки аналитики: ${trackCount}\`\`\``;
        },
      },
      SETTINGS_PLAYER: {
        MESSAGE_SEND: (send: boolean) =>
          `Опция отправки сообщений плеера установлена на ${
            send === true ? "Включен." : "Выключен."
          }.`,
        SEARCH_ENGINE_SET: (engine: string) =>
          `Поисковая система плеера установлена на ${engine}.`,
      },
      SETTING_ANALYTICS: {
        ENABLED_SET: (enable: boolean) =>
          `Опция подсчета аналитики установлена на: ${
            enable === true ? "Включен." : "Выключен."
          }.`,
        REMOVE_TRACKS: () => "Данные аналитики удалины.",
      },
      SETTINGS_LIVEPLAYER: {
        ENABLED_SET: (enable: boolean) =>
          `Опция Live Player установлена на: ${
            enable === true ? "Включен." : "Выключен."
          }.`,
        CHANNEL_SET: (channel: string) =>
          `Канал для Live Player'а установлен здесь: <#${channel}>.`,
        CHANNEL_IS_NOT_TEXT: () => "Выбранный канал не является текстовым.",
      },
      STATS: {
        AUTHOR_NAME: (client: ClientUser, version: string) =>
          `Статистика ${client.username} | v${version}`,
        DESC: (
          cache_guilds: number,
          guilds: number,
          cache_users: number,
          users: number,
          used_memory: number,
          total_memory: number,
          unix_timestamp_time: number
        ) => {
          return `Серверов > \`${cache_guilds} / ${guilds}\`\nПользователей > \`${cache_users} / ${users}\`\n\nПамять > \`${used_memory} / ${total_memory}\`\nВремя работы > <t:${unix_timestamp_time}:R>`;
        },
        NODE_FIELD: (stats: NodeStats) => {
          return `Плееров > \`${stats.players}\`\nАктивных Плееров > \`${
            stats.playingPlayers
          }\`\nВремя работы > <t:${Math.floor(
            Date.now() / 1000 - stats.uptime / 1000
          )}:R>\nПамять > \`${(stats.memory.used / 1024 / 1024).toFixed(
            2
          )} / ${(stats.memory.free / 1024 / 1024).toFixed(2)}\``;
        },
      },
    };
  }
}
