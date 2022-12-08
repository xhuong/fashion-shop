import { Slider as AntSlider } from "antd";
import { useEffect } from "react";
import { StyledRangeSlider } from "./styles";

const RangeSlider = ({ onChange, ...props }) => {
  const defaultRangeValue = [400, 1700];

  useEffect(() => {
    onChange(defaultRangeValue);
  }, []);

  return (
    <StyledRangeSlider>
      <AntSlider
        step={50}
        range={{ draggableTrack: true }}
        defaultValue={[...defaultRangeValue]}
        min={0}
        max={2000}
        onChange={(value) => onChange(value)}
      />
    </StyledRangeSlider>
  );
};

export default RangeSlider;
