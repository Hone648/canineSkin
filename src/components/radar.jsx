import { ResponsiveRadar } from '@nivo/radar';
import { data } from '../data/radarData';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';

const Radar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let keys = [
    'Wahl USA',
    "Burt's Bees",
    'Arm & Hammer',
    'Honest Paws',
    'Lilian Ruff',
  ];
  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy="metric"
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
          translateX: -75,
          translateY: 10,
          itemWidth: -10,
          itemHeight: 20,
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
