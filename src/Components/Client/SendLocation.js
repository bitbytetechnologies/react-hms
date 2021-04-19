
import Autocomplete from 'react-google-autocomplete';
function SendLocation() {

    const onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        console.log('address')
    };
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <fieldset className="form-group">
                    <Autocomplete
                        style={{
                            width: '100%',
                            height: '40px',
                            paddingLeft: '16px',
                            marginTop: '2px',
                            marginBottom: '100px'
                        }
                        }
                        onPlaceSelected={(e) => onPlaceSelected(e)}
                        types={['(regions)']}
                        className="form-control"
                    />
                </fieldset>
            </div>
        </div>

    )
}

export default SendLocation;

