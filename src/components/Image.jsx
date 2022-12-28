/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, fallback, type, ...delegated }) {
	return (
		<picture>
			<source srcSet={src} type={type} />
			<img src={src} {...delegated} />
		</picture>
	);
}

Image.propTypes = {
	src: PropTypes.string,
	fallback: PropTypes.string,
	type: PropTypes.string,
};

Image.defaultProps = {
	src: '',
	fallback: '',
	type: 'image/webp',
};
