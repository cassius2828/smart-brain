import React from "react";

export const Navigation = ({handleSignOut, handleSignIn, signedInState}) => {
  return signedInState ? (
    <nav style={{ display: "flex", justifyContent: "end", position: "fixed", top: 0, right: 0 }}>
      <p
        onClick={handleSignOut}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign Out
      </p>
    </nav>
  ) : (
    <nav style={{ display: "flex", justifyContent: "end", position: "fixed", top: 0, right: 0 }}>
      <p
        onClick={handleSignIn}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign In
      </p>
    </nav>
  );
};
