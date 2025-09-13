---
title: API Reference
description: API documentation generated from OpenAPI specification
---

# Train Travel API

API for finding and booking train trips across Europe.

{{#alert}} 
Created from [https://github.com/bump-sh-examples/train-travel-api/blob/main/openapi.yaml](https://github.com/bump-sh-examples/train-travel-api/blob/main/openapi.yaml).

Example OkiDoki openapi CLI command:

```bash
okidoki openapi -i openapi/train-travel-api.yaml -o docs/examples/train-travel-api.md
```
{{/alert}}

## Run in Postman

Experiment with this API in Postman, using our Postman Collection.

[![Run In Postman](https://run.pstmn.io/button.svg =128x32)](https://app.getpostman.com/run-collection/9265903-7a75a0d0-b108-4436-ba54-c6139698dc08?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D9265903-7a75a0d0-b108-4436-ba54-c6139698dc08%26entityType%3Dcollection%26workspaceId%3Df507f69d-9564-419c-89a2-cb8e4c8c7b8f)


**Version:** 1.2.1

## Contact

**Name:** Train Support

**Email:** support@example.com

**URL:** https://example.com/support

## Base URLs

- **https://try.microcks.io/rest/Train+Travel+API/1.0.0** - Mock Server
- **https://api.example.com** - Production

## Endpoints

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /stations

**Summary:** Get a list of train stations

Returns a paginated and searchable list of all train stations.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| page | query | integer | No | The page number to return |
| limit | query | integer | No | The number of items to return per page |
| coordinates | query | string | No | The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location.
 |
| search | query | string | No | A search term to filter the list of stations by name or address.
 |
| country | query | string | No | Filter stations by country code |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
OK

**Content-Type:** `application/json`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Wrapper-Collection"
    },
    {
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/Station"
          }
        }
      }
    },
    {
      "properties": {
        "links": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Links-Self"
            },
            {
              "$ref": "#/components/schemas/Links-Pagination"
            }
          ]
        }
      }
    }
  ]
}
```

**References:** [Wrapper-Collection](#wrapper-collection), [Station](#station), [Links-Self](#links-self), [Links-Pagination](#links-pagination)

**Content-Type:** `application/xml`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Wrapper-Collection"
    },
    {
      "properties": {
        "data": {
          "type": "array",
          "xml": {
            "name": "stations",
            "wrapped": true
          },
          "items": {
            "$ref": "#/components/schemas/Station"
          }
        }
      }
    },
    {
      "properties": {
        "links": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Links-Self"
            },
            {
              "$ref": "#/components/schemas/Links-Pagination"
            }
          ]
        }
      }
    }
  ]
}
```

**References:** [Wrapper-Collection](#wrapper-collection), [Station](#station), [Links-Self](#links-self), [Links-Pagination](#links-pagination)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="401"}}
No response body.

  {{/tab}}
  {{#tab title="403"}}
No response body.

  {{/tab}}
  {{#tab title="429"}}
No response body.

  {{/tab}}
  {{#tab title="500"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /trips

**Summary:** Get available train trips

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.


#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| page | query | integer | No | The page number to return |
| limit | query | integer | No | The number of items to return per page |
| origin | query | string | Yes | The ID of the origin station |
| destination | query | string | Yes | The ID of the destination station |
| date | query | string | Yes | The date and time of the trip in ISO 8601 format in origin station's timezone. |
| bicycles | query | boolean | No | Only return trips where bicycles are known to be allowed |
| dogs | query | boolean | No | Only return trips where dogs are known to be allowed |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
A list of available train trips

**Content-Type:** `application/json`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Wrapper-Collection"
    },
    {
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "allOf": [
              {
                "$ref": "#/components/schemas/Trip"
              },
              {
                "$ref": "#/components/schemas/Links-Origin"
              },
              {
                "$ref": "#/components/schemas/Links-Destination"
              }
            ]
          }
        }
      }
    },
    {
      "properties": {
        "links": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Links-Self"
            },
            {
              "$ref": "#/components/schemas/Links-Pagination"
            }
          ]
        }
      }
    }
  ]
}
```

**References:** [Wrapper-Collection](#wrapper-collection), [Trip](#trip), [Links-Origin](#links-origin), [Links-Destination](#links-destination), [Links-Self](#links-self), [Links-Pagination](#links-pagination)

**Content-Type:** `application/xml`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Wrapper-Collection"
    },
    {
      "properties": {
        "data": {
          "type": "array",
          "xml": {
            "name": "trips",
            "wrapped": true
          },
          "items": {
            "$ref": "#/components/schemas/Trip"
          }
        }
      }
    },
    {
      "properties": {
        "links": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Links-Self"
            },
            {
              "$ref": "#/components/schemas/Links-Pagination"
            }
          ]
        }
      }
    }
  ]
}
```

**References:** [Wrapper-Collection](#wrapper-collection), [Trip](#trip), [Links-Self](#links-self), [Links-Pagination](#links-pagination)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="401"}}
No response body.

  {{/tab}}
  {{#tab title="403"}}
No response body.

  {{/tab}}
  {{#tab title="429"}}
No response body.

  {{/tab}}
  {{#tab title="500"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /bookings

**Summary:** List existing bookings

Returns a list of all trip bookings by the authenticated user.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| page | query | integer | No | The page number to return |
| limit | query | integer | No | The number of items to return per page |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
A list of bookings

**Content-Type:** `application/json`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Wrapper-Collection"
    },
    {
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/Booking"
          }
        }
      }
    },
    {
      "properties": {
        "links": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Links-Self"
            },
            {
              "$ref": "#/components/schemas/Links-Pagination"
            }
          ]
        }
      }
    }
  ]
}
```

**References:** [Wrapper-Collection](#wrapper-collection), [Booking](#booking), [Links-Self](#links-self), [Links-Pagination](#links-pagination)

**Content-Type:** `application/xml`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Wrapper-Collection"
    },
    {
      "properties": {
        "data": {
          "type": "array",
          "xml": {
            "name": "bookings",
            "wrapped": true
          },
          "items": {
            "$ref": "#/components/schemas/Booking"
          }
        }
      }
    },
    {
      "properties": {
        "links": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Links-Self"
            },
            {
              "$ref": "#/components/schemas/Links-Pagination"
            }
          ]
        }
      }
    }
  ]
}
```

**References:** [Wrapper-Collection](#wrapper-collection), [Booking](#booking), [Links-Self](#links-self), [Links-Pagination](#links-pagination)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="401"}}
No response body.

  {{/tab}}
  {{#tab title="403"}}
No response body.

  {{/tab}}
  {{#tab title="429"}}
No response body.

  {{/tab}}
  {{#tab title="500"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![POST](https://img.shields.io/badge/POST-post-blue?style=flat-square =80x20) /bookings

**Summary:** Create a booking

A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.

#### Request Body

Booking details

**Content-Type:** `application/json`

**Schema:**

```json
{
  "$ref": "#/components/schemas/Booking"
}
```

**References:** [Booking](#booking)

**Content-Type:** `application/xml`

**Schema:**

```json
{
  "$ref": "#/components/schemas/Booking"
}
```

**References:** [Booking](#booking)

#### Responses

{{#tabs}}
  {{#tab title="201"}}
Booking successful

**Content-Type:** `application/json`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Booking"
    },
    {
      "properties": {
        "links": {
          "$ref": "#/components/schemas/Links-Self"
        }
      }
    }
  ]
}
```

**References:** [Booking](#booking), [Links-Self](#links-self)

**Content-Type:** `application/xml`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Booking"
    },
    {
      "properties": {
        "links": {
          "$ref": "#/components/schemas/Links-Self"
        }
      }
    }
  ]
}
```

**References:** [Booking](#booking), [Links-Self](#links-self)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="401"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
  {{#tab title="409"}}
No response body.

  {{/tab}}
  {{#tab title="429"}}
No response body.

  {{/tab}}
  {{#tab title="500"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /bookings/{bookingId}

**Summary:** Get a booking

Returns the details of a specific booking.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| bookingId | path | string | Yes | The ID of the booking to retrieve. |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
The booking details

**Content-Type:** `application/json`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Booking"
    },
    {
      "properties": {
        "links": {
          "$ref": "#/components/schemas/Links-Self"
        }
      }
    }
  ]
}
```

**References:** [Booking](#booking), [Links-Self](#links-self)

**Content-Type:** `application/xml`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/Booking"
    },
    {
      "properties": {
        "links": {
          "$ref": "#/components/schemas/Links-Self"
        }
      }
    }
  ]
}
```

**References:** [Booking](#booking), [Links-Self](#links-self)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="401"}}
No response body.

  {{/tab}}
  {{#tab title="403"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
  {{#tab title="429"}}
No response body.

  {{/tab}}
  {{#tab title="500"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![DELETE](https://img.shields.io/badge/DELETE-delete-red?style=flat-square =80x20) /bookings/{bookingId}

**Summary:** Delete a booking

Deletes a booking, cancelling the hold on the trip.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| bookingId | path | string | Yes | The ID of the booking to retrieve. |

#### Responses

{{#tabs}}
  {{#tab title="204"}}
Booking deleted

No response body.

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="401"}}
No response body.

  {{/tab}}
  {{#tab title="403"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
  {{#tab title="429"}}
No response body.

  {{/tab}}
  {{#tab title="500"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![POST](https://img.shields.io/badge/POST-post-blue?style=flat-square =80x20) /bookings/{bookingId}/payment

**Summary:** Pay for a Booking

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| bookingId | path | string | Yes | The ID of the booking to pay for. |

#### Request Body

Payment details

**Content-Type:** `application/json`

**Schema:**

```json
{
  "$ref": "#/components/schemas/BookingPayment"
}
```

**References:** [BookingPayment](#bookingpayment)

#### Responses

{{#tabs}}
  {{#tab title="200"}}
Payment successful

**Content-Type:** `application/json`

```json
{
  "allOf": [
    {
      "$ref": "#/components/schemas/BookingPayment"
    },
    {
      "properties": {
        "links": {
          "$ref": "#/components/schemas/Links-Booking"
        }
      }
    }
  ]
}
```

**References:** [BookingPayment](#bookingpayment), [Links-Booking](#links-booking)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="401"}}
No response body.

  {{/tab}}
  {{#tab title="403"}}
No response body.

  {{/tab}}
  {{#tab title="429"}}
No response body.

  {{/tab}}
  {{#tab title="500"}}
No response body.

  {{/tab}}
{{/tabs}}

---

## Data Models

### Station {#station}

A train station.

```json
{
  "description": "A train station.",
  "type": "object",
  "xml": {
    "name": "station"
  },
  "required": [
    "id",
    "name",
    "address",
    "country_code"
  ],
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the station.",
      "examples": [
        "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
        "b2e783e1-c824-4d63-b37a-d8d698862f1d"
      ]
    },
    "name": {
      "type": "string",
      "description": "The name of the station",
      "examples": [
        "Berlin Hauptbahnhof",
        "Paris Gare du Nord"
      ]
    },
    "address": {
      "type": "string",
      "description": "The address of the station.",
      "examples": [
        "Invalidenstraße 10557 Berlin, Germany",
        "18 Rue de Dunkerque 75010 Paris, France"
      ]
    },
    "country_code": {
      "type": "string",
      "description": "The country code of the station.",
      "format": "iso-country-code",
      "examples": [
        "DE",
        "FR"
      ]
    },
    "timezone": {
      "type": "string",
      "description": "The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).",
      "examples": [
        "Europe/Berlin",
        "Europe/Paris"
      ]
    }
  }
}
```

### Links-Self {#links-self}

The link to the current resource.

```json
{
  "description": "The link to the current resource.",
  "type": "object",
  "properties": {
    "self": {
      "type": "string",
      "format": "uri"
    }
  }
}
```

### Links-Destination {#links-destination}

The link to the destination station resource.

```json
{
  "description": "The link to the destination station resource.",
  "type": "object",
  "properties": {
    "self": {
      "type": "string",
      "format": "uri"
    }
  }
}
```

### Links-Origin {#links-origin}

The link to the origin station resource.

```json
{
  "description": "The link to the origin station resource.",
  "type": "object",
  "properties": {
    "self": {
      "type": "string",
      "format": "uri"
    }
  }
}
```

### Links-Pagination {#links-pagination}

Links to the next and previous pages of a paginated response.

```json
{
  "description": "Links to the next and previous pages of a paginated response.",
  "type": "object",
  "properties": {
    "next": {
      "type": "string",
      "format": "uri"
    },
    "prev": {
      "type": "string",
      "format": "uri"
    }
  }
}
```

### Problem {#problem}

A problem detail object as defined in RFC 7807.

```json
{
  "description": "A problem detail object as defined in RFC 7807.",
  "type": "object",
  "xml": {
    "name": "problem",
    "namespace": "urn:ietf:rfc:7807"
  },
  "properties": {
    "type": {
      "type": "string",
      "description": "A URI reference that identifies the problem type",
      "examples": [
        "https://example.com/probs/out-of-credit"
      ]
    },
    "title": {
      "type": "string",
      "description": "A short, human-readable summary of the problem type",
      "examples": [
        "You do not have enough credit."
      ]
    },
    "detail": {
      "type": "string",
      "description": "A human-readable explanation specific to this occurrence of the problem",
      "examples": [
        "Your current balance is 30, but that costs 50."
      ]
    },
    "instance": {
      "type": "string",
      "description": "A URI reference that identifies the specific occurrence of the problem",
      "examples": [
        "/account/12345/msgs/abc"
      ]
    },
    "status": {
      "type": "integer",
      "description": "The HTTP status code",
      "examples": [
        400
      ]
    }
  }
}
```

### Trip {#trip}

A train trip.

```json
{
  "description": "A train trip.",
  "type": "object",
  "xml": {
    "name": "trip"
  },
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the trip",
      "examples": [
        "4f4e4e1-c824-4d63-b37a-d8d698862f1d"
      ]
    },
    "origin": {
      "type": "string",
      "description": "The starting station of the trip",
      "examples": [
        "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e",
        "b2e783e1-c824-4d63-b37a-d8d698862f1d"
      ]
    },
    "destination": {
      "type": "string",
      "description": "The destination station of the trip",
      "examples": [
        "b2e783e1-c824-4d63-b37a-d8d698862f1d",
        "efdbb9d1-02c2-4bc3-afb7-6788d8782b1e"
      ]
    },
    "departure_time": {
      "type": "string",
      "format": "date-time",
      "description": "The date and time when the trip departs",
      "examples": [
        "2024-02-01T10:00:00Z"
      ]
    },
    "arrival_time": {
      "type": "string",
      "format": "date-time",
      "description": "The date and time when the trip arrives",
      "examples": [
        "2024-02-01T16:00:00Z"
      ]
    },
    "operator": {
      "type": "string",
      "description": "The name of the operator of the trip",
      "examples": [
        "Deutsche Bahn",
        "SNCF"
      ]
    },
    "price": {
      "type": "number",
      "description": "The cost of the trip",
      "examples": [
        50
      ]
    },
    "bicycles_allowed": {
      "type": "boolean",
      "description": "Indicates whether bicycles are allowed on the trip"
    },
    "dogs_allowed": {
      "type": "boolean",
      "description": "Indicates whether dogs are allowed on the trip"
    }
  }
}
```

### Booking {#booking}

A booking for a train trip.

```json
{
  "description": "A booking for a train trip.",
  "type": "object",
  "xml": {
    "name": "booking"
  },
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the booking",
      "readOnly": true,
      "examples": [
        "3f3e3e1-c824-4d63-b37a-d8d698862f1d"
      ]
    },
    "trip_id": {
      "type": "string",
      "format": "uuid",
      "description": "Identifier of the booked trip",
      "examples": [
        "4f4e4e1-c824-4d63-b37a-d8d698862f1d"
      ]
    },
    "passenger_name": {
      "type": "string",
      "description": "Name of the passenger",
      "examples": [
        "John Doe"
      ]
    },
    "has_bicycle": {
      "type": "boolean",
      "description": "Indicates whether the passenger has a bicycle."
    },
    "has_dog": {
      "type": "boolean",
      "description": "Indicates whether the passenger has a dog."
    }
  }
}
```

### Wrapper-Collection {#wrapper-collection}

This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).

```json
{
  "description": "This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).",
  "type": "object",
  "properties": {
    "data": {
      "description": "The wrapper for a collection is an array of objects.",
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "links": {
      "description": "A set of hypermedia links which serve as controls for the client.",
      "type": "object",
      "readOnly": true
    }
  },
  "xml": {
    "name": "data"
  }
}
```

### BookingPayment {#bookingpayment}

A payment for a booking.

```json
{
  "description": "A payment for a booking.",
  "type": "object",
  "properties": {
    "id": {
      "description": "Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects.",
      "type": "string",
      "format": "uuid",
      "readOnly": true
    },
    "amount": {
      "description": "Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.",
      "type": "number",
      "exclusiveMinimum": 0,
      "examples": [
        49.99
      ]
    },
    "currency": {
      "description": "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.",
      "type": "string",
      "enum": [
        "bam",
        "bgn",
        "chf",
        "eur",
        "gbp",
        "nok",
        "sek",
        "try"
      ]
    },
    "source": {
      "unevaluatedProperties": false,
      "description": "The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.",
      "oneOf": [
        {
          "title": "Card",
          "description": "A card (debit or credit) to take payment from.",
          "type": "object",
          "properties": {
            "object": {
              "type": "string",
              "const": "card"
            },
            "name": {
              "type": "string",
              "description": "Cardholder's full name as it appears on the card.",
              "examples": [
                "Francis Bourgeois"
              ]
            },
            "number": {
              "type": "string",
              "description": "The card number, as a string without any separators. On read all but the last four digits will be masked for security.",
              "examples": [
                "4242424242424242"
              ]
            },
            "cvc": {
              "type": "string",
              "description": "Card security code, 3 or 4 digits usually found on the back of the card.",
              "minLength": 3,
              "maxLength": 4,
              "writeOnly": true,
              "example": "123"
            },
            "exp_month": {
              "type": "integer",
              "format": "int64",
              "description": "Two-digit number representing the card's expiration month.",
              "examples": [
                12
              ]
            },
            "exp_year": {
              "type": "integer",
              "format": "int64",
              "description": "Four-digit number representing the card's expiration year.",
              "examples": [
                2025
              ]
            },
            "address_line1": {
              "type": "string",
              "writeOnly": true
            },
            "address_line2": {
              "type": "string",
              "writeOnly": true
            },
            "address_city": {
              "type": "string"
            },
            "address_country": {
              "type": "string"
            },
            "address_post_code": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "number",
            "cvc",
            "exp_month",
            "exp_year",
            "address_country"
          ]
        },
        {
          "title": "Bank Account",
          "description": "A bank account to take payment from. Must be able to make payments in the currency specified in the payment.",
          "type": "object",
          "properties": {
            "object": {
              "const": "bank_account",
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "number": {
              "type": "string",
              "description": "The account number for the bank account, in string form. Must be a current account."
            },
            "sort_code": {
              "type": "string",
              "description": "The sort code for the bank account, in string form. Must be a six-digit number."
            },
            "account_type": {
              "enum": [
                "individual",
                "company"
              ],
              "type": "string",
              "description": "The type of entity that holds the account. This can be either `individual` or `company`."
            },
            "bank_name": {
              "type": "string",
              "description": "The name of the bank associated with the routing number.",
              "examples": [
                "Starling Bank"
              ]
            },
            "country": {
              "type": "string",
              "description": "Two-letter country code (ISO 3166-1 alpha-2)."
            }
          },
          "required": [
            "name",
            "number",
            "account_type",
            "bank_name",
            "country"
          ]
        }
      ]
    },
    "status": {
      "description": "The status of the payment, one of `pending`, `succeeded`, or `failed`.",
      "type": "string",
      "enum": [
        "pending",
        "succeeded",
        "failed"
      ],
      "readOnly": true
    }
  }
}
```

### Links-Booking {#links-booking}

The link to the booking resource.

```json
{
  "description": "The link to the booking resource.",
  "type": "object",
  "properties": {
    "booking": {
      "type": "string",
      "format": "uri",
      "examples": [
        "https://api.example.com/bookings/1725ff48-ab45-4bb5-9d02-88745177dedb"
      ]
    }
  }
}
```

