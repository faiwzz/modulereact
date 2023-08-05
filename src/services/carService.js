import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll:()=>apiService.get(urls.cars.base),
    create:(car)=>apiService.post(urls.cars.base, car),
    updateById:(id, car)=>apiService.put(urls.cars.byID(id), car),
    deleteById:(id)=>apiService.delete(urls.cars.byID(id))
}

export {
    carService
}