import React, { Component } from "react";
import { Header, Spinner } from "../../common";
import Beer from "./Beer";
import { fetchBeers } from "../../../services/beerService";
import * as toast from "../../../utils/toast";

class BeerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      beers: [],
    };
  }

  scrollParentRef = null;

  fetchBeers = async () => {
    const data = await fetchBeers();

    this.setState({
      beers: data,
      isLoading: false,
    });
  };
  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Header />
        {isLoading ? (
          <Spinner />
        ) : (
          <main>
            <div className="container" ref={(r) => (this.scrollParentRef = r)}>
              {this.state.beers.map((beer) => (
                <Beer key={beer.id} info={beer} />
              ))}
            </div>
          </main>
        )}
      </div>
    );
  }
}
export default BeerGrid;