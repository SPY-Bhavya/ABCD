import { geoEquirectangular, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, MultiLineString } from "geojson";
import worldData from "world-atlas/countries-110m.json";
import { WorldMapClient } from "./world-map-client";

// Lon/lat of real ports
const portCoords: { id: string; lon: number; lat: number; label: string }[] = [
  { id: "mum", lon: 72.83, lat: 18.95, label: "Mumbai" },
  { id: "dxb", lon: 55.27, lat: 25.20, label: "Dubai" },
  { id: "sin", lon: 103.85, lat: 1.30, label: "Singapore" },
  { id: "shg", lon: 121.47, lat: 31.23, label: "Shanghai" },
  { id: "hkg", lon: 114.16, lat: 22.32, label: "Hong Kong" },
  { id: "rtm", lon: 4.48, lat: 51.92, label: "Rotterdam" },
  { id: "ham", lon: 9.99, lat: 53.55, label: "Hamburg" },
  { id: "nyc", lon: -74.0, lat: 40.7, label: "New York" },
  { id: "la", lon: -118.24, lat: 33.74, label: "Los Angeles" },
  { id: "syd", lon: 151.21, lat: -33.87, label: "Sydney" },
  { id: "sao", lon: -46.33, lat: -23.97, label: "Santos" },
  { id: "dur", lon: 31.0, lat: -29.86, label: "Durban" },
];

const arcSpecs: [string, string, number][] = [
  ["mum", "rtm", 0],
  ["mum", "dxb", 0.6],
  ["mum", "sin", 1.2],
  ["sin", "la", 1.8],
  ["shg", "nyc", 2.4],
  ["hkg", "ham", 3.0],
  ["mum", "nyc", 3.6],
  ["dxb", "syd", 4.2],
  ["rtm", "sao", 4.8],
  ["mum", "dur", 5.4],
];

function arcPath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const curve = Math.min(dist * 0.32, 110);
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} Q ${mx.toFixed(2)} ${(my - curve).toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

// Pre-compute paths at build time (server-side only)
function buildMapData() {
  const VIEW_W = 1000;
  const VIEW_H = 500;

  // Equirectangular projection — fits the whole world into 1000x500
  const projection = geoEquirectangular()
    .scale(VIEW_W / (2 * Math.PI))
    .translate([VIEW_W / 2, VIEW_H / 2]);

  const pathGen = geoPath(projection);

  // @ts-expect-error topojson typing nuance
  const land = feature(worldData, worldData.objects.land) as FeatureCollection;
  // @ts-expect-error topojson typing nuance
  const countries = feature(worldData, worldData.objects.countries) as FeatureCollection;

  const landPath = pathGen(land) ?? "";
  const countryPaths = countries.features
    .map((f) => pathGen(f) ?? "")
    .filter(Boolean);

  // Project ports
  const ports = portCoords.map((p) => {
    const [x, y] = projection([p.lon, p.lat]) ?? [0, 0];
    return { id: p.id, x, y, label: p.label };
  });

  const arcs = arcSpecs.map(([a, b, delay]) => {
    const from = ports.find((p) => p.id === a)!;
    const to = ports.find((p) => p.id === b)!;
    return { d: arcPath(from.x, from.y, to.x, to.y), delay, from, to };
  });

  return { landPath, countryPaths, ports, arcs };
}

const mapData = buildMapData();

export function WorldMap() {
  return (
    <WorldMapClient
      landPath={mapData.landPath}
      countryPaths={mapData.countryPaths}
      ports={mapData.ports}
      arcs={mapData.arcs}
    />
  );
}
