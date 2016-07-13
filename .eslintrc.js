module.exports = {
	"extends": "airbnb",

	"plugins": [
		"react"
	],

	"rules": {
		"arrow-body-style": 0,
		"indent": ["error", "tab"],
		"import/no-unresolved": 0,
		"no-underscore-dangle": 0,
		"new-cap": 0,
		"radix": ["error", "as-needed"],
		"react/no-deprecated": ["error", { "react": "0.15.2"  }],
		"react/prop-types": 0,
		"react/jsx-no-bind": 1,
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"semi": ["error", "never"]
	}
};
