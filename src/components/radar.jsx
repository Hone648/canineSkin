import { ResponsiveRadar } from '@nivo/radar';
import { data } from '../data/radarData';

const Radar = () => {
  return (
    <ResponsiveRadar
      data={data}
      keys={['Stupid Dog Shampoo Co.']}
      indexBy="metric"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={10}
      gridLevels={3}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={{ scheme: 'purple_orange' }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
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
