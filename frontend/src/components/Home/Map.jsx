import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import geoUrl from "../Map/main.json"
import { MarkerPin } from "../icons"

const markers = [
    { markerOffset: -30, name: "New York", coordinates: [-74.0060, 40.7128] },
    { markerOffset: 15, name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
    { markerOffset: 15, name: "Chicago", coordinates: [-87.6298, 41.8781] },
    { markerOffset: -30, name: "Houston", coordinates: [-95.3698, 29.7604] },
    { markerOffset: 15, name: "Phoenix", coordinates: [-112.0740, 33.4484] },
    { markerOffset: 15, name: "Philadelphia", coordinates: [-75.1652, 39.9526] },
    { markerOffset: -30, name: "San Antonio", coordinates: [-98.4936, 29.4241] },
    { markerOffset: 15, name: "San Diego", coordinates: [-117.1611, 32.7157] },
    { markerOffset: 15, name: "Dallas", coordinates: [-96.7969, 32.7767] },
    { markerOffset: 15, name: "San Jose", coordinates: [-121.8863, 37.3382] },
    { markerOffset: -30, name: "Mumbai", coordinates: [72.8777, 19.0760] },
    { markerOffset: 15, name: "Delhi", coordinates: [77.1025, 28.7041] },
    { markerOffset: 15, name: "Bangalore", coordinates: [77.5946, 12.9716] },
    { markerOffset: -30, name: "Hyderabad", coordinates: [78.4867, 17.3850] },
    { markerOffset: 15, name: "Chennai", coordinates: [80.2707, 13.0827] },
    { markerOffset: 15, name: "Kolkata", coordinates: [88.3639, 22.5726] },
    { markerOffset: -30, name: "Ahmedabad", coordinates: [72.5714, 23.0225] },
    { markerOffset: 15, name: "Pune", coordinates: [73.8567, 18.5204] },
    { markerOffset: 15, name: "Jaipur", coordinates: [75.7873, 26.9124] },
    { markerOffset: 15, name: "Lucknow", coordinates: [80.9462, 26.8467] }
];

export default function Map() {
    return <div className="w-[90vw] ml-[-7vw] h-screen">
        <ComposableMap className="z-[19] scale-y-[0.8]">
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} className="fill-[#00ff7b50]" />
                    ))
                }
            </Geographies>

            {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <g
                        fill="none"
                        stroke="#00ff7b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-10, -14) scale(0.5, 0.6)"
                    >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>

                    {/* <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fill: "white", fontSize: "0.4em", fontFamily: "Helvetica" }}
                    >
                        {name}
                    </text> */}
                </Marker>
            ))}
        </ComposableMap>
    </div>
}