import { LocationType } from 'wenum';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import LocationPointTag from './LocationPointTag';
import StreetTag from './StreetTag';
import CityTag from './CityTag';
import { StaticRow } from 'src/static';

interface LocationTagProps {
  address: string;
  locationType?: LocationType;
  onClick?: ZeroFuncType;
}

function LocationTag({
  address,
  locationType = LocationType.None,
  onClick = ZeroFunc
}: LocationTagProps) {
  const getTag = () => {
    switch (locationType) {
      case LocationType.Street:
        return <StreetTag label={address} onClick={onClick} />;
      case LocationType.City:
        return <CityTag label={address} onClick={onClick} />;
      default:
        return <LocationPointTag label={address} onClick={onClick} />;
    }
  };
  return <StaticRow className="text-gray-600 bg-white rounded-lg w-fit">{getTag()}</StaticRow>;
}

export default LocationTag;
