import { Component } from "react";
import Table from "./table";

class App extends Component {
  state = {
    characters: [
      {
        name: "joseph",
        job: "technician",
      },
      {
        name: "jack",
        job: "operator",
      },
      {
        name: "john",
        job: "security",
      },
    ],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;

    let filtered = characters.filter((character, i) => {
      return i !== index;
    });
    this.setState({ characters: filtered });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>Table </h1>
        <Table
          removeCharacter={this.removeCharacter}
          charactersData={characters}
        />
      </div>
    );
  }
}

export default App;
