import React from 'react';
import { View } from 'react-native';

interface OVEmptySpaceViewProps {
    height?: number;
    width?: number;
}

export const OVEmptySpaceView = (props: OVEmptySpaceViewProps) => <View style={{ height: props.height || 0, width: props.width || 0 }} />;
