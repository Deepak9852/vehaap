import React, { Component } from "react";
import DatePicker from "react-datepicker";
// import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "./search.css";
import { Link } from "react-router-dom";

const lurl = "http://localhost:9800/location";
const curl = "http://localhost:9800/carType";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      vehicalName: null,
      startDate: false,
      returnDate: false,
    };

    this.startHandleChange = this.startHandleChange.bind(this);
    this.onStartFormSubmit = this.onStartFormSubmit.bind(this);
    this.onReturnFormSubmit = this.onReturnFormSubmit.bind(this);
    this.returnHandleChange = this.returnHandleChange.bind(this);
    // this.handleCity = this.handleCity.bind(this);
    // this.renderCity = this.renderCity.bind(this);
    // this.renderCar = this.renderCar.bind(this);
  }

  startHandleChange(startingDate) {
    this.setState({
      startDate: startingDate,
    });
  }

  returnHandleChange(returningDate) {
    this.setState({
      returnDate: returningDate,
    });
  }

  onStartFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }

  onReturnFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.returnDate);
  }

  renderCity = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.city_name} key={item.city_name}>
            {item.city_name}
          </option>
        );
      });
    }
  };

  renderCar = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.carType_name} key={item._id}>
            {item.carType_name}
          </option>
        );
      });
    }
  };

  // handleCity = (event) => {
  //   let cityName = event.target.value;
  //   fetch(`${curl}${cityName}`, { method: "GET" })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ vehicalName: data });
  //     });
  // };
  render() {
    return (
      <>
        <div className="search">
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <select name="location" id="location">
                  <option onChange={this.handleCity}>
                    SELECT YOUR LOCATION (City)
                  </option>
                  {this.renderCity(this.state.location)}
                </select>
              </div>
              <div className="col">
                <select id="vehicalname">
                  <option>SELECT YOUR CHOICE (Car Types)</option>
                  {this.renderCar(this.state.vehicalName)}
                </select>
              </div>

              <div className="col">
                <form onSubmit={this.onStartFormSubmit}>
                  <div className="form-group">
                    <DatePicker
                      id="dateForm"
                      placeholderText="SELECT YOUR STARTING DATE"
                      selected={this.state.startDate}
                      onChange={this.startHandleChange}
                      name="startDate"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <select className="startingpoint">
                  <option value="starting point">
                    ----SELECT STARTING POINT----
                  </option>
                </select>
              </div>
              <div className="col">
                <select className="destination">
                  <option value="Destination">
                    ----SELECT DESTINATION-----
                  </option>
                </select>
              </div>
              <div className="col">
                <form onSubmit={this.onReturnFormSubmit}>
                  <div className="form-group">
                    <DatePicker
                      id="dateForm"
                      placeholderText="SELECT YOUR RETURNING DATE"
                      selected={this.state.returnDate}
                      onChange={this.returnHandleChange}
                      name="returnDate"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary ">
            <Link to="/listing" className="submit">
              Submit
            </Link>
          </button>
        </div>
      </>
    );
  }

  //api calling on page load
  componentDidMount() {
    fetch(lurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location: data });
      });
    fetch(curl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ vehicalName: data });
      });
  }
}

export default Search;
