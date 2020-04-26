import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Moment from "moment";
import "moment-timezone";
//import tz from "zipcode-to-timezone";
import "./App.css";

const API_KEY = "f5c71672d1aae94b50968e5701eb9f9f";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    time: undefined,
    icon: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    //const country = e.target.elements.country.value;
    const country = "US";
    //const api_call = await fetch(
    //  `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    //);
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&appid=${API_KEY}&units=Imperial`
    );
    const data = await api_call.json();
    console.log(data.cod);
    if (zip && country) {
      if (data.cod !== 200) {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          time: undefined,
          icon: undefined,
          error: "Please enter the correct zipcode!",
        });
      } else {
        this.setState({
          temperature: data.main.temp + " F",
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity + "%",
          description: data.weather[0].description,
          time: Moment()
            .utcOffset(data.timezone / 60)
            .format("YYYY-MM-DD h:mm A"),
          icon:
            "http://openweathermap.org/img/wn/" +
            data.weather[0].icon +
            "@2x.png",
          error: "",
        });
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        time: undefined,
        icon: undefined,
        error: "Please enter the values.",
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    time={this.state.time}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
