import { LocationType } from 'wenum';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import LocationPointTag from './LocationPointTag';
import StreetTag from './StreetTag';
import CityTag from './CityTag';
import { Row } from 'src/containers';

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
      case LocationType.Point:
        return <LocationPointTag label={address} onClick={onClick} />;
      case LocationType.Street:
        return <StreetTag label={address} onClick={onClick} />;
      case LocationType.City:
        return <CityTag label={address} onClick={onClick} />;
      default:
        return null;
    }
  };
  return <Row className="text-gray-600 bg-white rounded-lg w-fit">{getTag()}</Row>;
}

export default LocationTag;
