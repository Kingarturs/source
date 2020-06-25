export * from "./accordion"
export * from "./button"
export * from "./checkbox"
export * from "./choice-card"
export * from "./inline-error"
export * from "./link"
export * from "./radio"
export * from "./select"
export * from "./text-input"
export * from "./user-feedback"

import {
	buttonLight,
	buttonBrand,
	buttonBrandYellow,
	buttonDefault,
	buttonBrandAlt,
} from "./button"
import { checkboxLight, checkboxBrand, checkboxDefault } from "./checkbox"
import { choiceCardDefault } from "./choice-card"
import {
	inlineErrorLight,
	inlineErrorBrand,
	inlineErrorDefault,
} from "./inline-error"
import {
	linkLight,
	linkBrand,
	linkBrandYellow,
	linkDefault,
	linkBrandAlt,
} from "./link"
import { radioLight, radioBrand, radioDefault } from "./radio"
import { textInputLight, textInputDefault } from "./text-input"
import { userFeedbackDefault, userFeedbackBrand } from "./user-feedback"

export const defaultTheme = {
	...buttonDefault,
	...checkboxDefault,
	...choiceCardDefault,
	...inlineErrorDefault,
	...linkDefault,
	...radioDefault,
	...textInputDefault,
	...userFeedbackDefault,
	// continue to expose legacy theme names
	...buttonLight,
	...checkboxLight,
	...inlineErrorLight,
	...linkLight,
	...radioLight,
	...textInputLight,
}

export const brand = {
	...buttonBrand,
	...checkboxBrand,
	...inlineErrorBrand,
	...linkBrand,
	...radioBrand,
	...userFeedbackBrand,
}

export const brandAlt = {
	...buttonBrandAlt,
	...linkBrandAlt,
	// continue to expose legacy theme names
	...buttonBrandYellow,
	...linkBrandYellow,
}

// continue to expose legacy theme names
export const light = defaultTheme
export const brandYellow = brandAlt
