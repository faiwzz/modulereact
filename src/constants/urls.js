const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars';
const urls = {
cars:{
    base: cars,
    byID:(id)=>`${cars}/${id}`

}
}

export {
    baseURL,
    urls
}