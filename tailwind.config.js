/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.{js,jsx,ts,tsx}", // Scans the entry point index.ts file
		"./src/**/*.{js,jsx,ts,tsx}", // Scans all .js/.jsx/.ts/.tsx files in the src directory and its subdirectories
	],
	darkMode: "media", // Automatically uses system's theme
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: "#F8F8F6", // Ivory White (Light Mode)
					dark: "#1F2937", // Dark Ivory White (Dark Mode)
					contrast: {
						DEFAULT: "#EAEAEA", // Alabaster (Light Mode)
						dark: "#2D3748", // Darker Alabaster (Dark Mode)
					},
				},
				"primary-button": {
					background: {
						DEFAULT: "#B0C4DE", // Soft Blue (Light Mode)
						dark: "#334E68", // Dark Soft Blue (Dark Mode)
						disabled: {
							DEFAULT: "#D1D5DB", // Lighter Soft Blue (Disabled Light Mode)
							dark: "#718096", // Muted Dark Blue (Disabled Dark Mode)
						},
					},
					text: {
						DEFAULT: "#5F7689", // Muted Navy (Light Mode Text)
						dark: "#D1D5DB", // Cool Gray (Dark Mode Text)
					},
				},
				"secondary-button": {
					background: {
						DEFAULT: "#F4C77B", // Warm Gold (Light Mode, adjusted for better contrast)
						dark: "#8D6B3B", // Rich Brown (Dark Mode, matching overall palette)
						disabled: {
							DEFAULT: "#E5E5E5", // Light Gray (Disabled Light Mode)
							dark: "#4B5367", // Muted Dark Gold (Disabled Dark Mode)
						},
					},
					text: {
						DEFAULT: "#5F4B32", // Darker Brown (Light Mode Text, better contrast)
						dark: "#F2E5D7", // Soft Ivory (Dark Mode Text, high contrast)
					},
				},
				"toggle-button": {
					background: {
						on: {
							DEFAULT: "#34D399", // Emerald Green (Light Mode On State)
							dark: "#059669", // Darker Green (Dark Mode On State)
						},
						off: {
							DEFAULT: "#D1D5DB", // Cool Gray (Light Mode Off State)
							dark: "#4B5563", // Dark Gray (Dark Mode Off State)
						},
					},
					text: {
						on: {
							DEFAULT: "#FFFFFF", // White Text (Light Mode On State)
							dark: "#E5E7EB", // Light Gray Text (Dark Mode On State)
						},
						off: {
							DEFAULT: "#FFFFFF", // White Text (Light Mode Off State)
							dark: "#718096", // Dark Gray Text (Dark Mode Off State)
						},
					},
					border: {
						on: {
							DEFAULT: "#059669", // Strong Green Border (Light Mode On State)
							dark: "#34D399", // Emerald Green Border (Dark Mode On State)
						},
						off: {
							DEFAULT: "transparent", // No Border (Light Mode Off State)
							dark: "transparent", // No Border (Dark Mode Off State)
						},
					},
				},
				"stepper-button": {
					add: {
						background: {
							DEFAULT: "#D1D5DB", // Slightly Darker Gray (Light Mode Active)
							dark: "#374151", // Slightly Lighter Dark Gray (Dark Mode Active)
							disabled: {
								DEFAULT: "#F3F4F6", // Much Lighter Gray (Light Mode Disabled)
								dark: "#2D3748", // Much Darker Gray (Dark Mode Disabled)
							},
						},
						text: {
							DEFAULT: "#111827", // Almost Black (Light Mode Active Text)
							dark: "#F9FAFB", // Near White (Dark Mode Active Text)
							disabled: {
								DEFAULT: "#9CA3AF", // Muted Gray (Light Mode Disabled Text)
								dark: "#4B5563", // Darker Gray (Dark Mode Disabled Text)
							},
						},
					},
					subtract: {
						background: {
							DEFAULT: "#E5E7EB", // Light Gray (Light Mode Active)
							dark: "#4B5563", // Dark Gray (Dark Mode Active)
							disabled: {
								DEFAULT: "#F7FAFC", // Very Light Gray (Light Mode Disabled)
								dark: "#2D3748", // Much Darker Gray (Dark Mode Disabled)
							},
						},
						text: {
							DEFAULT: "#333333", // Charcoal Gray (Light Mode Active Text)
							dark: "#D1D5DB", // Cool Gray (Dark Mode Active Text)
							disabled: {
								DEFAULT: "#9CA3AF", // Muted Gray (Light Mode Disabled Text)
								dark: "#4B5563", // Darker Gray (Dark Mode Disabled Text)
							},
						},
					},
				},
				"title-text": {
					DEFAULT: "#1E3A8A", // Indigo (Light Mode)
					dark: "#A5B4FC", // Light Indigo (Dark Mode)
				},
				"primary-text": {
					DEFAULT: "#333333", // Charcoal Gray (Light Mode)
					dark: "#D1D5DB", // Cool Gray (Dark Mode)
				},
				"secondary-text": {
					DEFAULT: "#666666", // Slate Gray (Light Mode)
					dark: "#A0AEC0", // Lighter Slate Gray (Dark Mode)
				},
				accent: {
					pink: {
						DEFAULT: "#F4A8A5", // Blush Pink (Light Mode)
						dark: "#D88A8A", // Darker Pink (Dark Mode)
					},
					green: {
						DEFAULT: "#B8D8C9", // Misty Green (Light Mode)
						dark: "#3B5367", // Darker Green (Dark Mode)
					},
				},
				neutral: {
					white: {
						DEFAULT: "#FFFFFF", // Cool White (Light Mode)
						dark: "#F7FAFC", // Off White (Dark Mode)
					},
					divider: {
						DEFAULT: "#E5E5E5", // Ash Gray (Light Mode)
						dark: "#718096", // Darker Ash Gray (Dark Mode)
					},
				},
				card: {
					background: {
						DEFAULT: "#FFFFFF", // White (Light Mode Background)
						dark: "#2D3748", // Darker Alabaster (Dark Mode Background)
					},
					border: {
						DEFAULT: "#E5E5E5", // Light Gray (Light Mode Border)
						dark: "#4B5563", // Dark Gray (Dark Mode Border)
					},
					"title-text": {
						DEFAULT: "#1E3A8A", // Indigo (Light Mode Title Text)
						dark: "#A5B4FC", // Light Indigo (Dark Mode Title Text)
					},
					"primary-text": {
						DEFAULT: "#333333", // Charcoal Gray (Light Mode Primary Text)
						dark: "#D1D5DB", // Cool Gray (Dark Mode Primary Text)
					},
					"secondary-text": {
						DEFAULT: "#666666", // Slate Gray (Light Mode Secondary Text)
						dark: "#A0AEC0", // Lighter Slate Gray (Dark Mode Secondary Text)
					},
				},
				plate: {
					45: {
						DEFAULT: "#3B82F6", // Blue 500
						dark: "#1E3A8A", // Darker Blue for dark mode
						highlight: {
							DEFAULT: "#60A5FA", // Blue 400
							dark: "#1D4ED8", // Blue 700
						},
						shadow: {
							DEFAULT: "#2563EB", // Blue 600
							dark: "#1E40AF", // Blue 800
						},
					},
					35: {
						DEFAULT: "#F59E0B", // Yellow 500
						dark: "#B45309", // Darker Yellow for dark mode
						highlight: {
							DEFAULT: "#FBBF24", // Yellow 400
							dark: "#D97706", // Yellow 600
						},
						shadow: {
							DEFAULT: "#F59E0B", // Yellow 500
							dark: "#92400E", // Yellow 800
						},
					},
					25: {
						DEFAULT: "#10B981", // Green 500
						dark: "#047857", // Darker Green for dark mode
						highlight: {
							DEFAULT: "#34D399", // Green 400
							dark: "#059669", // Green 600
						},
						shadow: {
							DEFAULT: "#059669", // Green 600
							dark: "#065F46", // Green 800
						},
					},
					10: {
						DEFAULT: "#F9FAFB", // Gray 50
						dark: "#E5E7EB", // Darker Gray for dark mode
						highlight: {
							DEFAULT: "#F3F4F6", // Gray 200
							dark: "#9CA3AF", // Gray 400
						},
						shadow: {
							DEFAULT: "#D1D5DB", // Gray 300
							dark: "#6B7280", // Gray 600
						},
					},
					5: {
						DEFAULT: "#3B82F6", // Blue 500
						dark: "#1E3A8A", // Darker Blue for dark mode
						highlight: {
							DEFAULT: "#60A5FA", // Blue 400
							dark: "#1D4ED8", // Blue 700
						},
						shadow: {
							DEFAULT: "#2563EB", // Blue 600
							dark: "#1E40AF", // Blue 800
						},
					},
					"2_5": {
						DEFAULT: "#10B981", // Green 500
						dark: "#047857", // Darker Green for dark mode
						highlight: {
							DEFAULT: "#34D399", // Green 400
							dark: "#059669", // Green 600
						},
						shadow: {
							DEFAULT: "#059669", // Green 600
							dark: "#065F46", // Green 800
						},
					},
					"1_25": {
						DEFAULT: "#F9FAFB", // Gray 50
						dark: "#E5E7EB", // Darker Gray for dark mode
						highlight: {
							DEFAULT: "#F3F4F6", // Gray 200
							dark: "#9CA3AF", // Gray 400
						},
						shadow: {
							DEFAULT: "#D1D5DB", // Gray 300
							dark: "#6B7280", // Gray 600
						},
					},
				},
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["dark", "disabled"],
			textColor: ["dark", "disabled"],
			borderColor: ["dark", "disabled"],
		},
	},
	plugins: [],
};
