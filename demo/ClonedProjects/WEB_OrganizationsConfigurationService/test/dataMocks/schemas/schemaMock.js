module.exports = {
    "partitionName": "metadata",
    "schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "http://osc.au10tixservices.com/schemas/instinct.json",
        "title": "Instinct",
        "type": "object",
        "definitions": {
            "countries": {
                "type": "string"
            }
        },
        "additionalProperties": true,
        "examples": [
            {
                "sharing": {
                    "savePii": true,
                    "shareDataWithOthers": true,
                    "queryOthersData": true
                },
                "blackLists": {
                    "excludedCountries": []
                }
            }
        ],
        "properties": {
            "sharing": {
                "$id": "#root/sharing",
                "title": "Sharing",
                "type": "object",
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                },
                "description": "Sharing Checkbox",
                "properties": {
                    "shareDataWithOthers": {
                        "$id": "#root/sharing/shareDataWithOthers",
                        "title": "Sharedatawithothers",
                        "type": "boolean",
                        "default": true
                    },
                    "savePii": {
                        "$id": "#root/sharing/savePii",
                        "title": "Savepii",
                        "type": "boolean",
                        "default": false
                    },
                    "queryOthersData": {
                        "$id": "#root/sharing/queryOthersData",
                        "title": "Queryothersdata",
                        "type": "boolean",
                        "default": true
                    }
                }
            },
            "blackLists": {
                "$id": "#root/blackLists",
                "title": "Blacklists",
                "type": "object",
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                },
                "properties": {
                    "excludedCountries": {
                        "$id": "#root/blackLists/excludedCountries",
                        "title": "Excluded Countries",
                        "type": "array",
                        "default": [],
                        "items": {
                            "$ref": "#/definitions/countries"
                        },
                        "uniqueItems": true
                    }
                }
            }
        }
    }
}