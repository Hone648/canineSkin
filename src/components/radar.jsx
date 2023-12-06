import { ResponsiveRadar } from '@nivo/radar';
import { data } from '../data/radarData';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';

const Radar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveRadar
      data={data}
      keys={['Stupid Dog Shampoo Co.', "Burt's Bees"]}
      indexBy="metric"
      valueFormat=">-.0f"
      margin={{ top: 30, right: 0, bottom: 0, left: 0 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={15}
      gridLevels={3}
      dotSize={10}
      dotColor={colors.blueAccent[500]}
      dotBorderWidth={1}
      colors={colors.blueAccent[100]}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          translateX: 0,
          translateY: -40,
          itemWidth: -10,
          itemHeight: 200,
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
