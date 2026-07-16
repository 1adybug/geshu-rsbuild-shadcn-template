import { useId } from "react"

import { createUseMutation } from "soda-tanstack-query"
import { toast } from "sonner"

import { login } from "@/apis/login"

import { cookieStorage } from "@/utils/cookieStorage"

export const useLogin = createUseMutation(() => {
    const key = useId()

    return {
        mutationFn: login,
        onMutate() {
            toast.loading("登录中...", { id: key })
        },
        onSuccess(data, variables, onMutateResult, context) {
            cookieStorage.setItem("token", data.token)
            context.client.invalidateQueries({ queryKey: ["get-account", undefined] })

            toast.success("登录成功", { id: key })
        },
        onError() {
            toast.dismiss(key)
        },
    }
})
