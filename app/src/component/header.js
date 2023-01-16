import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.css";

const url = "http://localhost:5000/api/auth/userInfo";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      userData: "",
    };
  }

  handleLogout = () => {
    sessionStorage.removeItem("ltk");
    this.setState({ userData: "" });
    this.props.history.push("/");
  };

  conditionalHeader = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      let outArray = [data.name, data.email, data.phone];
      sessionStorage.setItem("userInfo", outArray);
      return (
        <div className="icons">
          <button className="btn btn-info">
            <Link to="/" className="navtext">
              <i className="bi bi-cart"></i> cart
            </Link>
          </button>
          &nbsp;
          <button className="btn btn-info">
            <Link to="/" className="navtext">
              <i className="bi bi-person-fill"></i> Hi {data.name}
            </Link>
          </button>
          &nbsp;
          <button
            className="btn btn-info"
            onClick={this.handleLogout}
            id="logout"
          >
            <i className="bi bi-box-arrow-left"></i>Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="icons">
          <button className="btn btn-info">
            <Link to="/login" className="navtext">
              <i className="bi bi-person-fill"></i> login{" "}
            </Link>
          </button>
          <button className="btn btn-info">
            <Link to="/register" className="navtext">
              <i className="bi bi-person-fill"></i> Register
            </Link>
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className="navbar navbar-expand-lg fixed-top">
            {" "}
            <div className="container-fluid">
              <span className="brandname">
                <h4>The Rental Zone</h4>
                <p>~rent your dream</p>
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon-sm" id="collapse"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Community
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Career
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      More
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Setting
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      AboutUs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="icons">
                  <li>{this.conditionalHeader()}</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
}

export default withRouter(Header);
