import { toast } from "react-toastify"
import { axiosClients } from "./axiosClients"

export const ApiClients = {
    Categorys: {
        GetAll: async (dispath, CategorySuccess) => {
            await axiosClients({
                method: "GET",
                url: "/categorys"
            }).then((res) => {
                dispath(CategorySuccess(res.data.Categorys))
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    toast.error(err)
                }
            })
        }
    },
    Carousels: {
        GetAll: async (dispath, CarouselSuccess) => {
            await axiosClients({
                method: "GET",
                url: "/carousels"
            }).then((res) => {
                dispath(CarouselSuccess(res.data.Carousels))
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    toast.error(err)
                }
            })
        }
    },
    Productions: {
        GetAll: async (dispath, ProductionSuccess) => {
            await axiosClients({
                method: "GET",
                url: "/productions"
            }).then((res) => {
                dispath(ProductionSuccess(res.data.Productions))
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    toast.error(err)
                }
            })
        }
    },
    Clients: {
        Register: async (userName, pass, email, phone) => {
            await axiosClients({
                method: "POST",
                url: "/clients/register",
                data: {
                    userName: userName,
                    pass: pass,
                    email: email,
                    phone: phone
                }
            }).then((res) => {
                toast.success(res.data.mess)
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    toast.error(err)
                }
            })
        }
    }
}