import dayjs from "dayjs"
// import dame from "dame";


// ***********************************************************
// dame
// ***********************************************************

// dame.baseUrl = process.env.VITE_API_URL;



// ***********************************************************
// dayjs
// ***********************************************************

import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import customParseFormat from "dayjs/plugin/customParseFormat"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import isToday from "dayjs/plugin/isToday"
import isTomorrow from "dayjs/plugin/isTomorrow"
import isYesterday from "dayjs/plugin/isYesterday"
import es from "dayjs/locale/es"

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);

dayjs.tz.setDefault("Europe/Madrid");
dayjs.locale(es);



// ***********************************************************
// mantine
// ***********************************************************

export const mantineTheme = {
	// Default: https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts
	
	colors: {
		"economos": ["#E9FCF6","#C1F6E5","#99F0D5","#70EAC4","#48E5B3","#20DFA3","#1AB282","#138662","#0D5941","#062D21"],
	},
	
	primaryColor: "economos",
	// colorScheme: "dark",
	fontFamily: "Asap, sans-serif",
	
	datesLocale: "es-ES",
	dateFormat: "DD/MM/YYYY",
	
	shadows: {
		xs: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 8px 4px rgba(0, 0, 0, 0.05)',
		sm: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 2px 4px 0 rgba(0, 0, 0, 0.09), 0 3px 10px 4px rgba(0, 0, 0, 0.07)',
		md: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
		lg: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 6px 9px 0 rgba(0, 0, 0, 0.13), 0 10px 24px 4px rgba(0, 0, 0, 0.10)',
		xl: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 9px 12px 0 rgba(0, 0, 0, 0.14), 0 20px 30px 4px rgba(0, 0, 0, 0.11)',
	},
	
	fontSizes: {
		xxxs: 8,
		xxs: 10,
		xs: 12,
		sm: 14,
		md: 16,
		lg: 17,
		xl: 20,
		xxl: 25,
		xxxl: 30,
	},
	spacing: {
		xxxs: 2.5,
		xxs: 5,
		xs: 10,
		sm: 12,
		md: 16,
		lg: 20,
		xl: 24,
		xxl: 30,
		xxxl: 34,
	},
}
