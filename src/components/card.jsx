import React from 'react';
import '../stylesheets/moviecard.css'; // Ensure the stylesheet is properly linked

function Card({ image, title, description, rating}) {
    return (
        <div className="card">
            <img className="card-image" src={image} alt={title} />
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
                <div className="card-footer">
                    <div className="card-rating">
                        <span className="material-icons">star</span> {rating}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
