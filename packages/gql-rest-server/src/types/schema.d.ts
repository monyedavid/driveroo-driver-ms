// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
driverLocationUpdates: string | null;
driverProfileLocationUpdates: string | null;
generateCo_ordinates: Array<gco_response_union> | null;
bye: string | null;
}

interface IDriverLocationUpdatesOnQueryArguments {
driverId: string;
}

interface IDriverProfileLocationUpdatesOnQueryArguments {
driverId: string;
}

interface IGenerateCoOrdinatesOnQueryArguments {
partial_address?: IGcoPartialAddress | null;
ff_addreess?: IGcoFfAdsress | null;
avergaes?: boolean | null;
ffa?: boolean | null;
}

interface IGcoPartialAddress {
country: string;
housenumber: string;
city: string;
street: string;
}

interface IGcoFfAdsress {
fft: string;
}

type gco_response_union = IGcoResponse | IError;



interface IGcoResponse {
__typename: "gco_response";
co_ordinates: IGcoResponseCoOrdinates | null;
address: IGcoResponseAddress | null;
}

interface IGcoResponseCoOrdinates {
__typename: "gco_response_coOrdinates";
Latitude: string | null;
Longitude: string | null;
}

interface IGcoResponseAddress {
__typename: "gco_response_address";
Label: string | null;
Country: string | null;
State: string | null;
County: string | null;
City: string | null;
Street: string | null;
AdditionalData: Array<ILocationsAddressDataAddy | null> | null;
}

interface ILocationsAddressDataAddy {
__typename: "_Locations_Address_data_addy";
value: string | null;
key: string | null;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}

interface ISubscription {
__typename: "Subscription";
driverLiveGeo: IDriverLiveGeoResult | null;
driverDefaultGeo: IDriverDefaultGeoResult | null;
somethingChanged: IResult | null;
}

interface IDriverLiveGeoOnSubscriptionArguments {
id: string;
model: string;
}

interface IDriverDefaultGeoOnSubscriptionArguments {
id: string;
model: string;
}

interface IDriverLiveGeoResult {
__typename: "driverLiveGeo_Result";
id: string;
driver: ILiveDriver;
}

interface ILiveDriver {
__typename: "LiveDriver";
firstName: string;
lastName: string;
mobile: string;
email: string;
avatar: string;
dob: string;
current_location: ILiveLocation;
}

type Driver = ILiveDriver | IPtsDriver;

interface IDriver {
__typename: "Driver";
firstName: string;
lastName: string;
mobile: string;
email: string;
avatar: string;
dob: string;
}

interface ILiveLocation {
__typename: "LiveLocation";
lat: string;
long: string;
last_Seen: IDLs | null;
}

interface IDLs {
__typename: "dLs";
lat: string;
long: string;
updatedAt: string;
}

interface IDriverDefaultGeoResult {
__typename: "driverDefaultGeo_Result";
id: string;
driver: IPtsDriver;
}

interface IPtsDriver {
__typename: "PtsDriver";
firstName: string;
lastName: string;
mobile: string;
email: string;
avatar: string;
dob: string;
primary_location: IDuLocation | null;
secondary_location: IDuLocation | null;
tertiary_location: IDuLocation | null;
}

interface IDuLocation {
__typename: "du_Location";
address: string;
landmark: string;
city: string;
state: string;
lat: string;
long: string;
}

interface IResult {
__typename: "Result";
id: string | null;
}
}

// tslint:enable
