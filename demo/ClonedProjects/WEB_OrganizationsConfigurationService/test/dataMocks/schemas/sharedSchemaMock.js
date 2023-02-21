module.exports = {
    "id": "metadata-sharedtest",
    "partitionName": "metadata",
    "schema": {
        "$schema": "http://json-schema.org/draft-07/schema",
        "$id": "https://osc.au10tixservices.com/schemas/shared",
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "mandatory2ndSide": {
                "type": "object",
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                },
                "additionalProperties": false,
                "properties": {
                    "active": {
                        "type": "boolean"
                    },
                    "supportedDocumentTypes": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "object",
                            "properties": {
                                "countryCode": {
                                    "type": "string",
                                    "example": "ISR"
                                },
                                "documentType": {
                                    "type": "string",
                                    "example": "Driver License"
                                },
                                "mandatory2ndSide": {
                                    "type": "boolean",
                                    "default": false
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "countryCode",
                                "documentType"
                            ]
                        }
                    }
                }
            },
            "general": {
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                },
                "properties": {
                    "active": {
                        "type": "boolean"
                    },
                    "customLogo": {
                        "title": "customLogo",
                        "type": "string",
                        "format": "uri",
                        "uri-content-type": [
                            "image/apng",
                            "image/bmp",
                            "image/gif",
                            "image/x-icon",
                            "image/jpeg",
                            "image/png"
                        ]
                    },
                    "companyName": {
                        "type": "string",
                        "maxLength": 50
                    }
                },
                "additionalProperties": false
            },
            "blocklist": {
                "type": "object",
                "authorization": {
                    "read": [
                        "*"
                    ],
                    "write": [
                        "org-admin"
                    ]
                },
                "additionalProperties": false,
                "properties": {
                    "active": {
                        "type": "boolean"
                    },
                    "list": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "object",
                            "properties": {
                                "countryCode": {
                                    "type": "string",
                                    "example": "ISR"
                                },
                                "documentType": {
                                    "type": "string",
                                    "example": "Driver License"
                                },
                                "blocked": {
                                    "type": "boolean",
                                    "default": false
                                }
                            },
                            "additionalProperties": false,
                            "required": [
                                "countryCode",
                                "documentType"
                            ]
                        }
                    }
                }
            }
        }
    }
}