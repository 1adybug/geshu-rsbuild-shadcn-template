import config from "@1adybug/eslint"

export default [
    {
        ignores: ["components/ui/**", "utils/shadcn.ts"],
    },
    ...config,
]
