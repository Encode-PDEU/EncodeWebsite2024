import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import geoUrl from "../Map/main.json"
import { Tooltip } from "@nextui-org/tooltip";
import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import { markers } from "../Map/markers"

export default function Map() {
    return <div className="w-[90vw] sm:h-screen h-[60vh] flex flex-col justify-center">

        <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-5xl">Alumni</span>
            <span className="font-normal text-md text-foreground-500">Meet past members of encode!</span>
        </div>

        <ComposableMap className="z-[19] scale-y-[0.8] sm:ml-[-7em] sm:mt-[-10em]">
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} className="fill-[#00ff7b50]" />
                    ))
                }
            </Geographies>

            {markers.map(({ name, coordinates, markerOffset, company, country, linkedin }, index) => (
                <Marker key={index} coordinates={coordinates}>
                    <Tooltip content={
                        <div className="flex flex-col items-center">
                            <span class={`fi fi-${country.toLowerCase()}`}></span>
                            <span className="font-bold">{name}</span>
                            {(company.trim() !== "NA" && company.trim() !== "PDEU" && company.trim() !== "Pandit Deendayal Energy University" && company.trim() !== "-") && <span>{company}</span>}
                        </div>
                    } showArrow={true} color="success" shadow="lg">
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
                    </Tooltip>
                </Marker>
            ))}
        </ComposableMap>
    </div>
}