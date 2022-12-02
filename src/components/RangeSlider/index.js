import { Slider as AntSlider } from "antd";
import { StyledRangeSlider } from "./styles";

const RangeSlider = () => {
  return (
    <StyledRangeSlider>
      <AntSlider
        step={50}
        range={{ draggableTrack: true }}
        defaultValue={[800, 3200]}
        min={300}
        max={5000}
      />
    </StyledRangeSlider>
  );
};

export default RangeSlider;
