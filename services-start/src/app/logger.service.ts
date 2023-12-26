export class LoggerService {
  ChangeStatuslog(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
