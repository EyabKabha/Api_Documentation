module. exports = {
    "id": "metadata-securemetest",
    "partitionName": "metadata",
    "schema": {
        "$schema": "http://json-schema.org/draft-07/schema",
        "$id": "https://osc.au10tixservices.com/schemas/secure.me",
        "type": "object",
        "properties": {
            "callbackImageType": {
                "type": "string",
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                }
            },
            "openingScreen": {
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                },
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "active": {
                        "type": "boolean"
                    }
                }
            },
            "allowDeviceFlow": {
                "type": "object",
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                },
                "anyOf": [
                    {
                        "type": "object",
                        "properties": {
                            "desktop": {
                                "type": "boolean",
                                "enum": [
                                    true
                                ]
                            }
                        }
                    },
                    {
                        "type": "object",
                        "properties": {
                            "mobile": {
                                "type": "boolean",
                                "enum": [
                                    true
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}