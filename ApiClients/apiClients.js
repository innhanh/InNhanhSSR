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
                console.log(err)
            })
        }
    }
}