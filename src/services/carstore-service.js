class CarstoreService {
    data = [
        {
            id: 1,
            brand: "Renault",
            model: "Megan IV",
            year: 2016,
            price: 4000
        },
        {
            id: 2,
            brand: "Subaru",
            model: "Forester",
            year: 2010,
            price: 3600
        },
        {
            id: 1,
            brand: "Volvo",
            model: "XC60",
            year: 2017,
            price: 6000
        },
        {
            id: 1,
            brand: "Honda",
            model: "CRV",
            year: 2018,
            price: 5600
        }
    ]
    getCars() {
        return new Promise( (resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.data);
                reject(new Error("Error"));
            }, 700)
        } )
    }
} 

export default CarstoreService;