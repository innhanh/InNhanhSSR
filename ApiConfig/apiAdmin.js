import { toast } from "react-toastify"
import { axiosClients } from "./axiosClients"

export const ApiAdmin = {
    Authen: {
        Login: async (userName, pass, key, router) => {
            await axiosClients({
                method: "POST",
                url: "/admin/authen/login",
                data: {
                    userName, pass, key
                }
            }).then((res) => {
                toast.success(res.data.mess)
                router.replace("/admin/dashboard")
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    toast.error(err)
                }
            })
        },
        Register: async (userName, pass, mail, phone, key) => {

        }
    }

}