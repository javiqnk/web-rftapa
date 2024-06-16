import "server-only";

export const i18n = {
    defaultLocale: "es",
    // locales: ["es", "ca", "eu", "ga", "va"],
    locales: ["es"],
    localesNames: ["Español", "Català", "Euskara", "Galego", "Valencià"],
    prefixDefault: true,
} as const;

export type Locale = (typeof i18n)["locales"][number];

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    es: () => import("./language/es.json").then((module) => module.default),
    // ca: () => import("./language/ca.json").then((module) => module.default),
    // eu: () => import("./language/eu.json").then((module) => module.default),
    // ga: () => import("./language/ga.json").then((module) => module.default),
    // va: () => import("./language/va.json").then((module) => module.default),
};

// console.log(dictionaries.en())

export const getLanguage = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.es();