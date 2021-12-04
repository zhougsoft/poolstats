import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			text: string;
			lightText: string;
			link: string;
			background: string;
		};
		breakpoints: {
			sm: number;
			md: number;
			lg: number;
			xl: number;
		};
	}
}
