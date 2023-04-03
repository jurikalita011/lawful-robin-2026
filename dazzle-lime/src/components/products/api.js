import axios from "axios";
export const getData=(params={})=>{
    return axios.get(`https://good-rose-iguana-cape.cyclic.app/womensAllProducts`,{
       params:{
        _type:params.type,
        _sort:params.sort,
        _order:params.order,
        _brand:params.brand
       }
    })
  };