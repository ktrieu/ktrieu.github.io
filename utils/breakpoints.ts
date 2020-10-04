const MOBILE_MAX_WIDTH = 768
const DESKTOP_MIN_WIDTH = 769

export const desktopOnly = (style: TemplateStringsArray | string) => `
		@media (min-width: ${DESKTOP_MIN_WIDTH}px) {
			${style}
		}
	`

export const mobileOnly = (style: TemplateStringsArray | string) => `
		@media (max-width: ${MOBILE_MAX_WIDTH}px) {
			${style}
		}
	`
