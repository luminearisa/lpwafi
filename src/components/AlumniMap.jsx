import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from 'react-simple-maps';

const geoUrl = '/features.json';

// Define the coordinate dictionary and offset for the annotations
// dx and dy control the angle and length of the annotation line
const locationData = {
  "Islamic University of Madinah": { coords: [39.6111, 24.4686], dx: -80, dy: -60 },
  "Taibah University": { coords: [39.6111, 24.4686], dx: -120, dy: -20 },
  "Prince Sattam bin Abdulaziz University": { coords: [47.3346, 24.1553], dx: 60, dy: -60 },
  "Qassim University": { coords: [43.9740, 26.3259], dx: 20, dy: -80 },
  "King Saud University": { coords: [46.7386, 24.7743], dx: 80, dy: -20 },
  "King Abdulaziz University": { coords: [39.1979, 21.4858], dx: -90, dy: 40 },
  "Princess Nourah bint Abdulrahman University": { coords: [46.7386, 24.7743], dx: 110, dy: 20 },
  "Universitas Malaysia": { coords: [101.6869, 3.1390], dx: -40, dy: -50 },
  "Universiti Teknologi Malaysia": { coords: [103.7414, 1.4927], dx: 40, dy: -40 },
  "Multimedia University": { coords: [101.6869, 3.1390], dx: -60, dy: -20 },
  "International Islamic University Malaysia": { coords: [101.6869, 3.1390], dx: -20, dy: -80 },
  "Institut Teknologi Bandung": { coords: [107.6098, -6.9147], dx: 30, dy: 60 },
  "Universitas Padjadjaran": { coords: [107.6098, -6.9147], dx: 70, dy: 80 },
  "Institut Pertanian Bogor": { coords: [106.7972, -6.5971], dx: -20, dy: 70 },
  "Institut Teknologi Sepuluh Nopember": { coords: [112.7521, -7.2504], dx: 80, dy: 40 },
  "Universitas Andalas": { coords: [100.3692, -0.9492], dx: -80, dy: 20 },
  "Binus University": { coords: [106.8456, -6.2088], dx: 0, dy: 90 },
  "Telkom University": { coords: [107.6098, -6.9147], dx: -60, dy: 100 },
  "Universitas Trisakti": { coords: [106.8456, -6.2088], dx: -80, dy: 60 },
  "Al-Azhar University": { coords: [31.2357, 30.0444], dx: -60, dy: -60 },
  "Asia Pacific University": { coords: [101.6869, 3.1390], dx: 60, dy: 10 }
};

const AlumniMap = ({ universities = [] }) => {
  const brandTeal = '#29A6B6';
  
  // Filter out universities that have known coordinates
  const mapData = universities
    .filter(u => locationData[u.name])
    .map(u => ({
      ...u,
      ...locationData[u.name]
    }));

  return (
    <div className="w-full h-full relative" style={{ minHeight: '600px' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 250,
          center: [75, 10] // Centered somewhat between Middle East and SE Asia
        }}
        width={1000}
        height={600}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#d4e8dd" // Light green map color similar to the model
                stroke="#ffffff"
                strokeWidth={1}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#b5dfc6", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Render Annotations with Logos */}
        {mapData.map((dst, i) => (
          <Annotation
            key={i}
            subject={dst.coords}
            dx={dst.dx}
            dy={dst.dy}
            connectorProps={{
              stroke: "#999",
              strokeWidth: 1.5,
              strokeLinecap: "round"
            }}
          >
            <g transform="translate(-45, -15)">
              <rect x="0" y="0" width="90" height="30" fill="#fff" stroke="#eee" rx="4" />
              <image href={dst.logo} x="2" y="2" width="26" height="26" preserveAspectRatio="xMidYMid meet" />
              {/* Name split logic to handle text wrapping in SVG */}
              <text x="32" y="11" alignmentBaseline="middle" fill="#333" fontSize="6px" fontWeight="bold">
                {dst.name.length > 18 ? dst.name.substring(0, 18) + '-' : dst.name}
              </text>
              {dst.name.length > 18 && (
                <text x="32" y="19" alignmentBaseline="middle" fill="#333" fontSize="6px" fontWeight="bold">
                  {dst.name.substring(18, 36) + (dst.name.length > 36 ? '...' : '')}
                </text>
              )}
            </g>
          </Annotation>
        ))}
        
        {/* Draw a subtle dot on the actual coordinate */}
        {mapData.map((dst, i) => (
          <Marker key={`marker-${i}`} coordinates={dst.coords}>
             <circle r={2} fill={brandTeal} stroke="#fff" strokeWidth={1} />
          </Marker>
        ))}

      </ComposableMap>
    </div>
  );
};

export default AlumniMap;
