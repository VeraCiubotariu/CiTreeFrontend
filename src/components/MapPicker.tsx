import React, { useState, useRef, useEffect } from 'react';
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  Autocomplete,
} from '@react-google-maps/api';
import { mapsApiKey } from '../utils/mapsApiKey';
import { Location } from '../model/map-types';
import { defaultCenter } from '../utils/location-data';

const containerStyle = {
  width: '460px',
  height: '460px',
};

const MapPickerWithSearch = ({
  location,
  onLocationChange,
}: {
  location: Location | undefined;
  onLocationChange?: (location: Location) => void;
}) => {
  const [selectedLocation, setSelectedLocation] = useState(
    location ? location : defaultCenter
  );
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  console.log('Received location: ' + location?.lat + ', ' + location?.lng);

  console.log(
    'Setting marker on coordinates: ' +
      selectedLocation.lng +
      ', ' +
      selectedLocation.lat
  );

  useEffect(() => {
    if (location) {
      setSelectedLocation(location);
    }
  }, [location]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsApiKey, // Replace with your API key
    libraries: ['places'], // Required for Places API
  });

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const { lat, lng } = event.latLng.toJSON();
      setSelectedLocation({ lat, lng });
      onLocationChange && onLocationChange({ lat, lng });
    }
  };

  const handleAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    autocompleteRef.current = autocomplete;
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setSelectedLocation({ lat, lng });
      onLocationChange && onLocationChange({ lat, lng });
      map?.panTo({ lat, lng }); // Center map on the searched location
    }
  };

  return isLoaded ? (
    <div>
      {/* Autocomplete Search Input */}
      <Autocomplete
        onLoad={handleAutocompleteLoad}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Search for a location"
          style={{
            width: '460px',
            height: '40px',
            marginBottom: '10px',
            padding: '0 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </Autocomplete>

      {/* Map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={12}
        onLoad={(mapInstance) => setMap(mapInstance)}
        onClick={handleMapClick}
      >
        <MarkerF position={selectedLocation} />
      </GoogleMap>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MapPickerWithSearch;
