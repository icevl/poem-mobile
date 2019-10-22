import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CommentIcon = props => (
    <Svg viewBox='0 0 486.926 486.926' {...props}>
        <Path d='M425 139.393h-75v-55c0-35.841-29.159-65-65-65H65c-35.841 0-65 29.159-65 65v100c0 34.159 26.486 62.248 60 64.81v101.404l80-80v33.787c0 35.841 29.159 65 65 65h123.787L430 470.607V369.203c33.514-2.562 60-30.651 60-64.81v-100c0-35.841-29.159-65-65-65zm-285 65v23.787l-50 50v-58.787H65c-19.299 0-35-15.701-35-35v-100c0-19.299 15.701-35 35-35h220c19.299 0 35 15.701 35 35v55H205c-35.841 0-65 29.159-65 65zm320 100c0 19.299-15.701 35-35 35h-25v58.787l-58.787-58.787H205c-19.299 0-35-15.701-35-35v-100c0-19.299 15.701-35 35-35h220c19.299 0 35 15.701 35 35v100z' />
        <Path d='M215 209.393h200v30H215zM215 269.393h200v30H215z' />
    </Svg>
);

export default CommentIcon;