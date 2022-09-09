import Carousel, { Alignment } from "nuka-carousel";
import "./styles.css";

export default function App() {
  return (
    <div
      className="App"
      style={{ border: "1px solid pink", width: "fit-content" }}
    >
      <Carousel
        cellAlign={Alignment.Left}
        slidesToShow={1.3}
        cellSpacing={16}
        disableEdgeSwiping={true}
        renderCenterLeftControls={() => null}
        renderCenterRightControls={() => null}
        // renderBottomCenterControls={() => null}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "#45AE9E"
          }
        }}
        style={{ width: "330px", border: "1px solid black" }}
      >
        <div
          style={{
            height: "356px",
            width: "300px",
            border: "1px solid #45AE9E"
          }}
        />
        <div
          style={{
            height: "356px",
            width: "300px",
            border: "1px solid #45AE9E"
          }}
        />
      </Carousel>
    </div>
  );
}
