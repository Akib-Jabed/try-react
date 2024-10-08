import PropTypes from 'prop-types';
import { useState } from 'react';
import Star from './Star';

StarRating.propTypes = {
    maxRating: PropTypes.number,
    defaultRating: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string,
    messages: PropTypes.array,
    onSetRating: PropTypes.func
}

export default function StarRating({
    defaultRating=0, 
    className="", 
    maxRating=5, 
    color="#fcc419", 
    size=48,
    messages=[],
    onSetRating}) {
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState(0);

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "16px"
    }
    
    const starContainerStyle = {
        display: "flex"
    } 
    
    const textStyle = {
        lineHeight: "1",
        margin: "0",
        color: color,
        fontSize: `${size / 1.5}px`
    }

    function handleRating(rating) {
        setRating(rating);
        onSetRating(rating);
    }

    return (
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>
                {Array.from({length: maxRating}, (_, i) => (
                    <Star key={i} 
                        size={size}
                        color={color}
                        full={tempRating ? tempRating >= i+1 : rating >= i + 1}
                        onRate={() => handleRating(i+1)}
                        onHoverIn={() => setTempRating(i+1)}
                        onHoverOut={() => setTempRating(0)}
                    />
                ))}
            </div>
            <p style={textStyle}>
                {messages.length === maxRating ? messages[tempRating ? tempRating - 1 : rating - 1] : tempRating || rating || ""}
            </p>
        </div>
    )
}