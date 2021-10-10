import React from "react";
import axios from "axios";
import Card from "./card";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      send: [],
      count: 7,
      newCount: 0
    };
  }

  componentDidMount() {
    this.getdata();
  }

  getdata = () => {
    axios
      .get(
        "https://f68370a9-1a80-4b78-b83c-8cb61539ecd6.mock.pstmn.io/api/v1/get_market_data"
      )
      .then((response) => {
        // console.log(response.data.data[0]);
        const dataArray = response.data.data;
        this.setState({ posts: dataArray });
        // console.log(dataArray)
      });
  };

  render() {
    return (
      <>
        <div className="main">
          <h1 className="main-head">Simple GET Request</h1>
          <div className="parent">
            {this.state.posts
              .slice(this.state.count - 7, this.state.count)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    dataArray={this.state.posts}
                    index={index}
                    date={item.date}
                    opening={item.open}
                    closing={item.close}
                  />
                );
              })}
          </div>

          {this.state.posts.length > 1 ? (
            this.state.count === 21 ? (
              <>
                <p>No more to load</p>
                <button
                  className="prev"
                  onClick={() => {
                    this.setState({ count: this.state.count - 7 });
                  }}
                >
                  Prev Page
                </button>
              </>
            ) : (
              <>
                <div>
                  {this.state.count !== 7 ? (
                    <button
                      className="prev"
                      onClick={() => {
                        this.setState({ count: this.state.count - 7 });
                      }}
                    >
                      Prev Page
                    </button>
                  ) : null}
                  <button
                    className="next"
                    onClick={() => {
                      this.setState({ count: this.state.count + 7 });
                    }}
                  >
                    Next Page
                  </button>
                </div>
              </>
            )
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
