import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from 'react-simple-maps';

const geoUrl = '/features.json';

const countryData = [
  { name: "Turki", coords: [35.2433, 38.9637], flag: "🇹🇷", dx: -30, dy: -30 },
  { name: "Rusia", coords: [105.3188, 61.5240], flag: "🇷🇺", dx: 0, dy: -40 },
  { name: "Arab Saudi", coords: [45.0792, 23.8859], flag: "🇸🇦", dx: -30, dy: 30 },
  { name: "Yordania", coords: [36.2384, 31.2400], flag: "🇯🇴", dx: -20, dy: -20 },
  { name: "Malaysia", coords: [101.9758, 4.2105], flag: "🇲🇾", dx: 30, dy: 30 },
  { name: "Singapura", coords: [103.8198, 1.3521], flag: "🇸🇬", dx: 20, dy: 50 },
  { name: "Mesir", coords: [30.8025, 26.8206], flag: "🇪🇬", dx: -30, dy: -10 },
  { name: "Qatar", coords: [51.1839, 25.3548], flag: "🇶🇦", dx: 30, dy: 10 }
];

const AlumniMapGlobal = () => {
  const brandTeal = '#29A6B6';

  return (
    <div className="w-full h-full relative bg-[#e2f0f9]" style={{ minHeight: '600px' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
          center: [50, 20]
        }}
        width={1000}
        height={600}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <ZoomableGroup zoom={1.5} maxZoom={5} center={[50, 25]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#d1d9e6"
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#b5dfc6", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {countryData.map((dst, i) => (
            <Annotation
              key={i}
              subject={dst.coords}
              dx={dst.dx}
              dy={dst.dy}
              connectorProps={{
                stroke: "#666",
                strokeWidth: 1.5,
                strokeLinecap: "round"
              }}
            >
              <g transform="translate(-40, -15)">
                <rect x="0" y="0" width="80" height="28" fill="#fff" stroke="#eee" rx="4" />
                <text x="8" y="18" fontSize="16px">{dst.flag}</text>
                <text x="32" y="16" alignmentBaseline="middle" fill="#333" fontSize="10px" fontWeight="bold">
                  {dst.name}
                </text>
              </g>
            </Annotation>
          ))}
          
          {countryData.map((dst, i) => (
            <Marker key={`marker-${i}`} coordinates={dst.coords}>
               <circle r={3} fill={brandTeal} stroke="#fff" strokeWidth={1} />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default AlumniMapGlobal;
