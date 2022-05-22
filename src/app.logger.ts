import { ConsoleLogger } from '@nestjs/common';

export class AppLogger extends ConsoleLogger {
  fail(obj: any) {
    super.printStackTrace(
      JSON.stringify({
        datetime: new Date().toISOString(),
        ...obj
      })
    );
  }
}
