import React from 'react';
import {Image, View} from 'react-native';
import Images from '../utils/Images';

export default function Floor({body}) {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  const imageIterations = Math.ceil(width / height);
  return (
    <View
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        overflow: 'hidden',
        flexDirection: 'row',
      }}>
      {Array.apply(null, Array(imageIterations)).map((el, idx) => {
        return (
          <Image
            style={{width: height, height: height}}
            key={idx}
            resizeMode="stretch"
            source={Images.floor}
          />
        );
      })}
    </View>
  );
}
