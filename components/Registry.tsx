import type { FC, ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/sonner"

export interface RegistryProps {
    children?: ReactNode
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: 0,
        },
    },
})

export const Registry: FC<RegistryProps> = ({ children }) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster position="top-center" />
        </QueryClientProvider>
    </ThemeProvider>
)
