import { parseISO, startOfHour } from "date-fns";
import { DateProvider } from "../../../application/providers/date-provider/date-provider";

export class DatefnsProvider implements DateProvider {
  startHour(date: Date): Date {
    return startOfHour(date);
  }
  parseDate(date: string): Date {
    return parseISO(date)
  }
}
