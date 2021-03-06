import React, {Component} from "react";
import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Top from "./topButton/Top";
import Education from "./education/Education";
import "./Main.css";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            isDark: false
        };
    }

    componentDidMount() {
        if (localStorage.getItem("isDark") === null) {
          const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
          localStorage.setItem("isDark", darkPref.matches);
        }
        this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
      }
      changeTheme = () => {
        this.setState({isDark: !this.state.isDark}, () => {
          localStorage.setItem("isDark", this.state.isDark);
        });
      };

      render(){
          return (
            <div className={this.state.isDark ? "dark-mode" : null}>
            <StyleProvider value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}>
                <Header />
                <Greeting />
                <Skills />
                <StackProgress />
                <Education />
                <Top />
            </StyleProvider>
            </div>
          );
      }
}