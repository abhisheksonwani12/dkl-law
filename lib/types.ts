export interface OfficeLocation {
  name: string;
  address: string;
  map: string;
}

export interface OfficeState {
  state: string;
  locations: OfficeLocation[];
}

export interface StateData {
  name: string;
  capital: string;
  population: string;
  languages: string[];
  description: string;
  interestingFact: string;
  economy: string;
  majorCities: string[];
}

// Keeping GeoJson types for the map
export interface GeoJsonFeature {
  type: "Feature";
  id?: string | number;
  properties: {
    ID_1?: number;
    NAME_1?: string; // Common in some datasets
    name?: string;   // Common in others
    [key: string]: any;
  };
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: any[];
  };
}

export interface GeoJsonResponse {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
}


export type Category = 'Core Advocates' | 'Advisory Team' | 'Management';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: Category;
  imageUrl: string;
  bio: string;
  isFounder?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Banner{
  subtitle: string;
  title: string;
  description: string;
  link: string;
}

export interface TeamMemberCardProps {
  id: string;
  name: string;
  title: string;
  image: string;
  description?: string;
  office?: string;
  practiceArea?: string;
  sector?: string;
}