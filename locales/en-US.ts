import Language from "@bot/structures/Language";

export default class EnglishUs extends Language {
  constructor() {
    super();

    this.translations = {
      COMMAND_ERROR: () => "An error occurred.",
      COMMAND_PLEASE_WAIT: () => "Please wait...",
      COMMAND_PING: (data: string) => `WebSocket ping ${data}`,
    };
  }
}
