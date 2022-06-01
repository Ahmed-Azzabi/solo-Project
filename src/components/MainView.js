import React from "react";

function MainView() {
  return (
    <main>
      <div className="main-head">
        <form className="search">
          <input type="search" placeholder="Pick your poison..." required />
        </form>
      </div>
    </main>
  );
}

export default MainView;
