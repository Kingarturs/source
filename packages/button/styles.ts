import { css } from "@emotion/core"
import { size, transitions } from "@guardian/src-foundations"
import { buttonLight, ButtonTheme } from "@guardian/src-foundations/themes"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const button = css`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	${textSans.medium({ fontWeight: "bold" })};
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${transitions.medium};

	&:focus {
		${focusHalo};
	}
`

export const primary = ({
	button,
}: { button: ButtonTheme } = buttonLight) => css`
	background-color: ${button.backgroundPrimary};
	color: ${button.textPrimary};

	&:hover {
		background-color: ${button.backgroundPrimaryHover};
	}
`

export const secondary = ({
	button,
}: { button: ButtonTheme } = buttonLight) => css`
	background-color: ${button.backgroundSecondary};
	color: ${button.textSecondary};
	${button.borderSecondary
		? `border: 1px solid ${button.borderSecondary};`
		: ""}

	&:hover {
		background-color: ${button.backgroundSecondaryHover};
	}
`

export const tertiary = ({
	button,
}: { button: ButtonTheme } = buttonLight) => css`
	padding: 0;
	background-color: ${button.backgroundTertiary};
	color: ${button.textTertiary};

	&:hover {
		text-decoration: underline;
	}
`

export const defaultSize = css`
	height: ${size.large}px;
	min-height: ${size.large}px;
	padding: 0 ${size.large / 2}px;
	border-radius: ${size.large / 2}px;
`

export const smallSize = css`
	height: ${size.medium}px;
	min-height: ${size.medium}px;
	padding: 0 ${size.medium / 2}px;
	border-radius: ${size.medium / 2}px;
`

export const iconDefault = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.large / 2}px;
		height: auto;
	}
`

export const iconSmall = css`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${size.medium / 2}px;
		height: auto;
	}
`

export const iconLeft = css`
	svg {
		margin: 0 ${-size.large / 8}px 0 ${size.large / 4}px;
	}
`

export const iconRight = css`
	flex-direction: row-reverse;
	svg {
		margin: 0 ${size.large / 4}px 0 ${-size.large / 8}px;
	}
`

export const iconOnlyDefault = css`
	width: ${size.large}px;
	justify-content: center;
`

export const iconOnlySmall = css`
	width: ${size.medium}px;
	justify-content: center;
`
