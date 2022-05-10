import React from 'react'
import { CarstoreServiceConsumer} from '../carstore-service-context'


const withCarstoreService = () => (Wrapped) => {
    return (props) => {
        return (
        <CarstoreServiceConsumer>
            {
                (carstoreService)=>{
                    return (<Wrapped {...props} carstoreService={carstoreService}/>)
                }
            }
        </CarstoreServiceConsumer>
        )
    }
}

export default withCarstoreService;