'use client'
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

// interface MapBoxMapProps {
//     sidebarOpen: boolean;
// }

export default function MapBoxMap() {
    return (
        <div>
            <Map
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{width: "100%", height: 550}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            />
        </div>
    )
};

