import { ResponsiveRadar } from '@nivo/radar';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';

const Radar = ({ data, keys, indexBy }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy={indexBy}
      valueFormat=">-.0f"
      margin={{ top: 60, right: 60, bottom: 60, left: 90 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={15}
      gridLevels={3}
      dotSize={10}
      dotColor={{ from: 'color', modifiers: [] }}
      dotBorderWidth={1}
      colors={{ scheme: 'pastel1' }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: 30,
          translateY: 33,
          itemWidth: 10,
          itemHeight: 60,
          itemTextColor: colors.primary,
          symbolSize: 14,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Radar;
