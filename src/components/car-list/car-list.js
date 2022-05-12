import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import CarstoreService from "../../services/carstore-service";
import { carLoaded, carRequested, carLoadedError, carAddedToCart } from "../../actions";
import withCarstoreService from "../hoc"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"


class CarList extends React.Component {

    componentDidMount() {
        const { carstoreService, carLoaded, carRequested } = this.props
        carRequested();
        carstoreService.getCars()
            .then((data) => { carLoaded(data) })
            .catch((error) => { carLoadedError(error) })
    }

    render() {
        const { carList, loading, error, addToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <ul>
                {
                    carList.map((car) => {
                        return <li key={car.id}>{car.brand} - {car.model}. {car.price}$ <button className="btn btn-info add-to-cart"
                            onClick={() => addToCart(car.id)}>Add to cart</button></li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ cars }) => {
    return {
        carList: cars.carsList,
        loading: cars.loading,
        error: cars.error
    }
}

const mapDispatchToProps = {
    carLoaded,
    carRequested,
    carLoadedError,
    addToCart: carAddedToCart
}

export default compose(withCarstoreService(), connect(mapStateToProps, mapDispatchToProps))(CarList)
// export default connect(mapStateToProps)(CarList)