interface IConfig {
  label: string;
}

class ChariotConsole {
  private config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  private getDate(date: Date) {
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    return `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }.${`00${milliseconds}`.slice(-3)}`;
  }

  debug(message: string | Error, ...optionalParams: unknown[]) {
    const { label } = this.config;
    const timestamp = this.getDate(new Date());

    if (message instanceof Error) {
      console.debug(`🐞[${timestamp} • ${label}]`, message);
    } else {
      console.debug(`🐞[${timestamp} • ${label}] ${message}`, ...optionalParams);
    }
  }

  log(message: string, ...optionalParams: unknown[]) {
    const { label } = this.config;
    const timestamp = this.getDate(new Date());

    console.log(`👀[${timestamp} • ${label}] ${message}`, ...optionalParams);
  }

  error(message: string | Error, ...optionalParams: unknown[]) {
    const { label } = this.config;
    const timestamp = this.getDate(new Date());

    if (message instanceof Error) {
      console.error(`😔[${timestamp} • ${label}] ${message.message}`, message.name, message.stack);
    } else {
      console.error(`😔[${timestamp} • ${label}] ${message}`, ...optionalParams);
    }
  }

  warn(message: string, ...optionalParams: unknown[]) {
    const { label } = this.config;
    const timestamp = this.getDate(new Date());

    console.warn(`🧐[${timestamp} • ${label}] ${message}`, ...optionalParams);
  }

  info(message: string, ...optionalParams: unknown[]) {
    const { label } = this.config;
    const timestamp = this.getDate(new Date());

    console.info(`🤓[${timestamp} • ${label}] ${message}`, ...optionalParams);
  }
}

const callerFnc = function (config: IConfig) {
  return new ChariotConsole(config);
};

export default callerFnc;
