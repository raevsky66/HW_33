const root = ReactDOM.createRoot(document.getElementById('root'))

class Car extends React.Component {
     carsRender = this.props.arrCars.map((item) => {
        return <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.manufacturer}</h5>
                    <p className="card-text">{item.model}</p>
                    <p className="card-text">{item.year}</p>
                </div>
            </div>
        </React.Fragment>
    });

    render() {
        return (
            <React.Fragment>
                {this.carsRender}
            </React.Fragment>
     )
        ;
    }
}

function Car1(props) {
    const carsRender = props.arrCars.map((item) => {
        return <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.manufacturer}</h5>
                    <p className="card-text">{item.model}</p>
                    <p className="card-text">{item.year}</p>
                </div>
            </div>
        </React.Fragment>
    });
   
    return (
        <React.Fragment>
            {carsRender}
        </React.Fragment>
)
    ;
}

const cars = []
cars.push({
        manufacturer: "Toyota",
        model: "camry",
        year: 1990
    },
    {
        manufacturer: "Mazda",
        model: "model 3",
    year: 1996
},
    {
    manufacturer: "Lexus",
    model: "is250",
    year: 2015
});

const cars2 = []
cars2.push({
        manufacturer: "Kia",
        model: "Soul",
        year: 2023
    },
    {
        manufacturer: "Hyundai",
        model: "i30",
        year: 1986
    },
    {
        manufacturer: "BMW",
        model: "x5",
        year: 2016
    });


root.render(
    <div className="container">
        <div className="row">
            <Car arrCars={cars}/>
            <Car1 arrCars={cars2}/>
         </div>
    </div>
    , document.getElementById('root'))

