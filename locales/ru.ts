import Language from "@bot/structures/Language";

export default class RussianRu extends Language {
  constructor() {
    super();

    this.translations = {
      COMMAND_ERROR: () => "Произошла ошибка.",
      COMMAND_PLEASE_WAIT: () => "Пожалуйста подождите...",
      COMMAND_PING: (data: string) => data,
    };
  }
}
