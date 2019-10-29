import { palette } from "@guardian/src-foundations"

export type TextInputTheme = {
	inputColor: string
	textColor: string
	backgroundColor: string
}

export const lightTheme: { textInput: TextInputTheme } = {
	textInput: {
		inputColor: palette.neutral[7],
		textColor: palette.neutral[20],
		backgroundColor: palette.neutral[100],
	},
}

export const darkTheme: { textInput: TextInputTheme } = {
	textInput: {
		inputColor: palette.neutral[100],
		textColor: palette.neutral[100],
		backgroundColor: palette.neutral[7],
	},
}