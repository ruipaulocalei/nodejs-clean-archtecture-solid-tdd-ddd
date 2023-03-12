export interface DateProvider {
  parseDate(date: string): Date;
  startHour(date: Date): Date;
}
