import { Component } from "react";
import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { Logo } from "./components/navigation/logo/Logo";
import { ImageLinkForm } from "./components/navigation/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/navigation/Rank/Rank";
import Particles from "particles-bg";
import { FaceRec } from "./components/navigation/FaceRec/FaceRec";
import { SignIn } from "./components/navigation/SignIn/SignIn";
import { Register } from "./components/navigation/Register/Register";
// import {loadFull} from 'tsparticles-engine';

// const returnRequestOptions = ({ imageURL }) => {
//   // In this section, we set the user authentication, user and app ID, model details, and the URL
//   // of the image we want as an input. Change these strings to run your own example.
//   //////////////////////////////////////////////////////////////////////////////////////////////////

//   // Your PAT (Personal Access Token) can be found in the portal under Authentification
//   const PAT = "ad37e1eec6dd4960aaa0389b7052b74a";
//   // Specify the correct user_id/app_id pairings
//   // Since you're making inferences outside your app's scope
//   const USER_ID = "clarifai";
//   const APP_ID = "main";
//   // Change these to whatever model and image URL you want to use
//   const MODEL_ID = "face-detection";
//   const IMAGE_URL = imageURL ? imageURL : `https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRd3zC3Uc_NOFnlUejRzgsot1kA4l-NHqdFd3qCqE67wOG8RfTPQxnKKrC0O04VnmAlz3eOidpNEcTI0H4`;

//   ///////////////////////////////////////////////////////////////////////////////////
//   // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
//   ///////////////////////////////////////////////////////////////////////////////////

//   const raw = JSON.stringify({
//     user_app_id: {
//       user_id: USER_ID,
//       app_id: APP_ID,
//     },
//     inputs: [
//       {
//         data: {
//           image: {
//             url: IMAGE_URL,
//           },
//         },
//       },
//     ],
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       Authorization: "Key " + PAT,
//     },
//     body: raw,
//   };

//   return requestOptions;
// };
// ///////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageLink: "",
      box: {},
      numOfFaces: 0,
      route: "signedout",
      signedIn: false,
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions.map(
      (i) => i.region_info.bounding_box
    );
    const image = document.getElementById("input-img");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      numOfFaces: clarifaiFace.length,
      leftCol: clarifaiFace.map((i) => i.left_col * width),
      topRow: clarifaiFace.map((i) => i.top_row * height),
      rightCol: clarifaiFace.map((i) => width - i.right_col * width),
      bottomRow: clarifaiFace.map((i) => height - i.bottom_row * height),
    };
  };

  displayFaceBox = (boxy) => {
    this.setState({ box: boxy });
  };

  onInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  onButtonSubmit = () => {
    //* my issue with the 405 error occured bc I tried to destructure imageUrl instead of just applying the input state
    //* and moving the requestOptions into the main function
    const returnRequestOptions = () => {
      // Your PAT (Personal Access Token) can be found in the portal under Authentification
      const PAT = "ad37e1eec6dd4960aaa0389b7052b74a";
      // Specify the correct user_id/app_id pairings
      // Since you're making inferences outside your app's scope
      const USER_ID = "clarifai";
      const APP_ID = "main";
      // Change these to whatever model and image URL you want to use
      const MODEL_ID = "face-detection";
      const IMAGE_URL = this.state.input;

      ///////////////////////////////////////////////////////////////////////////////////
      // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
      ///////////////////////////////////////////////////////////////////////////////////

      const raw = JSON.stringify({
        user_app_id: {
          user_id: USER_ID,
          app_id: APP_ID,
        },
        inputs: [
          {
            data: {
              image: {
                url: IMAGE_URL,
              },
            },
          },
        ],
      });

      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Key " + PAT,
        },
        body: raw,
      };

      return requestOptions;
    };
    this.setState({
      imageLink: this.state.input,
    });
    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      returnRequestOptions(this.state.input)
    )
      .then((response) => response.json())
      .then((response) => {
        //  console.log(response)
        return this.displayFaceBox(this.calculateFaceLocation(response));
        // .catch((err) => console.log(err));

        // if (response) {
        //   fetch("http://localhost:3000/image", {
        //     method: "put",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       // id: this.state.user.id
        //     }),
        //   })
        //     .then((response) => response.json())
        //     .then((count) => {
        //       this.setState(
        //         Object.assign(this.state.user, { enteries: count })
        //       );
        //     });
        // }
      });
  };

  handleSignIn = () => {
    if (this.state.route === "signedout") {
      return this.setState({
        route: "home",
        signedIn: true,
      });
    } else if (this.state.route === "register") {
      return this.setState({
        route: "signedout",
        signedIn: false,
      });
    }
  };
handleSignUp = () => {
  if(this.state.route === 'register') {
    return this.setState({
      route: 'home',
      signedIn: true
    })
  }
}

  handleSignOut = () => {
    this.setState({
      route: "signedout",
      signedIn: false,
    });
  };
  handleRegister = () => {
    this.setState({
      route: "register",
    });
  };

  render() {
    return (
      <div className="App">
        <Particles type="cobweb" num={80} color="#ffffff" bg={true} />
        {this.state.route === "signedout" ? (
          <>
            {" "}
            <SignIn
              handleRegister={this.handleRegister}
              handleSignIn={this.handleSignIn}
            />
          </>
        ) : this.state.route === "register" ? (
          <>
            {" "}
            <Navigation
              signedInState={this.state.signedIn}
              handleSignOut={this.handleSignOut}
              handleSignIn={this.handleSignIn}
              handleSignUp={this.handleSignUp}
            />
            <Register handleSignUp={this.handleSignUp} />
          </>
        ) : (
          <>
            <Navigation
              signedInState={this.state.signedIn}
              handleSignOut={this.handleSignOut}
            />

            <div className="mt5">
              <Logo />
              <Rank />
              <ImageLinkForm
                onButtonSubmit={this.onButtonSubmit}
                onInputChange={this.onInputChange}
              />
              <FaceRec
                numOfFaces={this.state.numOfFaces}
                box={this.state.box}
                image={this.state.imageLink}
              />{" "}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
