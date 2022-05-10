import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import CarstoreService from "../../services/carstore-service";
import { carLoaded, carRequested } from "../../actions";
import withCarstoreService from "../hoc"


class CarList extends React.Component {

    componentDidMount() {
        const { carstoreService, carLoaded, carRequested } = this.props
        carRequested();
        carstoreService.getCars()
             .then((data) => { carLoaded(data) });
    }

    render() {
        const { carList } = this.props;
        console.log(carList)
        return (
            <ul>
                {
                    carList.map( (car)=>{
                        return <li key={car.id}>{car.brand} - {car.model}. {car.price}$</li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carList: state.carList
    }
}

const mapDispatchToProps = {
    carLoaded,
    carRequested
}

export default compose(withCarstoreService(), connect(mapStateToProps, mapDispatchToProps))(CarList)
// export default connect(mapStateToProps)(CarList)