var manila =
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [54.2118, 18.0658]
        },
        "properties": {
            "name": "Manila"
        }
    };

var bangkok =
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [86.49, 13.76]
        },
        "properties": {
            "name": "Bangkok"
        }
    };

var manila_bangkok =
    {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [48.40, 14.59], [86.49, 13.76]
            ]
        },
        "properties": {
            "name": "From Manila to Bangkok"
        }
    };