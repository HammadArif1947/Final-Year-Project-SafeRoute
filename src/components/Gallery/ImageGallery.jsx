import React, { useState } from 'react';

const ImageGallery = () => {
    const [images, setImages] = useState([
        { id: 1, url: 'https://via.placeholder.com/150', tags: ['road', 'summer'], type: 'Landscape' },
        { id: 2, url: 'https://via.placeholder.com/150', tags: ['winter', 'mountain'], type: 'Nature' },
        { id: 3, url: 'https://via.placeholder.com/150', tags: ['clear', 'highway'], type: 'Action' }
    ]);

    return (
        <div className="card fade-in" style={{ marginTop: '30px' }}>
            <div className="card-title">
                <i className="fas fa-images"></i>
                Route Memories & Cloud Storage
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['Karakoram', 'Hunza', 'Skardu', 'Baltistan'].map(tag => (
                    <span key={tag} className="route-badge" style={{ background: '#e5e7eb', cursor: 'pointer' }}>#{tag}</span>
                ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '12px' }}>
                {images.map(img => (
                    <div key={img.id} style={{ position: 'relative' }}>
                        <img
                            src={img.url}
                            alt="Road"
                            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                        />
                        <div style={{ position: 'absolute', bottom: '4px', left: '4px', display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
                            {img.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', padding: '1px 4px', borderRadius: '4px' }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
