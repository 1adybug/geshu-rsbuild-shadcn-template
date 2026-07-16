import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginSvgr } from "@rsbuild/plugin-svgr"
import { pluginTailwindcss } from "@rsbuild/plugin-tailwindcss"
import { sdrrRsbuildPlugin } from "sdrr/rsbuild"

export default defineConfig({
    source: {
        entry: {
            index: "./index.tsx",
        },
    },
    html: {
        title: "格数科技",
        meta: {
            description: "powered by geshu",
        },
        mountId: "root",
    },
    plugins: [
        pluginReact({
            reactCompiler: true,
        }),
        pluginSvgr(),
        pluginTailwindcss(),
        sdrrRsbuildPlugin(),
    ],
    server: {
        port: 5173,
    },
    output: {
        polyfill: "entry",
    },
})
