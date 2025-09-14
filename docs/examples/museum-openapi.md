---
title: API Reference
description: API documentation generated from OpenAPI specification
pagenav:
  levels: 1
---

# Redocly Museum API

Imaginary, but delightful Museum API for interacting with museum services and information. Built with love by Redocly.

{{#alert}} 
Created from [https://github.com/Redocly/museum-openapi-example/blob/main/openapi.yaml](https://github.com/Redocly/museum-openapi-example/blob/main/openapi.yaml).

Example OkiDoki openapi CLI command:

```bash
okidoki openapi -i openapi/museumapi.yaml -o docs/examples/museum-openapi.md
```
{{/alert}}

**Version:** 1.2.1

## Contact

**Email:** team@redocly.com

**URL:** https://redocly.com/docs/cli/

## Base URLs

- **https://redocly.com/_mock/docs/openapi/museum-api**

## Endpoints

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /museum-hours

**Summary:** Get museum hours

Get upcoming museum operating hours.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| startDate | query | string | No | Starting date to retrieve future operating hours from. Defaults to today's date. |
| page | query | integer | No | Page number to retrieve. |
| limit | query | integer | No | Number of days per page. |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
Success.

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/MuseumHours"
}
```

**References:** [MuseumHours](#museumhours)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![POST](https://img.shields.io/badge/POST-post-blue?style=flat-square =80x20) /special-events

**Summary:** Create special events

Creates a new special event for the museum.

#### Request Body

**Content-Type:** `application/json`

**Schema:**

```json
{
  "$ref": "#/components/schemas/SpecialEvent"
}
```

**References:** [SpecialEvent](#specialevent)

#### Responses

{{#tabs}}
  {{#tab title="201"}}
Created.

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/SpecialEvent"
}
```

**References:** [SpecialEvent](#specialevent)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /special-events

**Summary:** List special events

Return a list of upcoming special events at the museum.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| startDate | query | string | No | Starting date to retrieve future operating hours from. Defaults to today's date. |
| endDate | query | string | No | End of a date range to retrieve special events for. Defaults to 7 days after `startDate`. |
| page | query | integer | No | Page number to retrieve. |
| limit | query | integer | No | Number of days per page. |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
Success.

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/SpecialEventCollection"
}
```

**References:** [SpecialEventCollection](#specialeventcollection)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /special-events/{eventId}

**Summary:** Get special event

Get details about a special event.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| eventId | path | string | Yes | Identifier for a special event. |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
Success.

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/SpecialEvent"
}
```

**References:** [SpecialEvent](#specialevent)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![PATCH](https://img.shields.io/badge/PATCH-patch-yellow?style=flat-square =80x20) /special-events/{eventId}

**Summary:** Update special event

Update the details of a special event.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| eventId | path | string | Yes | Identifier for a special event. |

#### Request Body

**Content-Type:** `application/json`

**Schema:**

```json
{
  "$ref": "#/components/schemas/SpecialEventFields"
}
```

**References:** [SpecialEventFields](#specialeventfields)

#### Responses

{{#tabs}}
  {{#tab title="200"}}
Success.

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/SpecialEvent"
}
```

**References:** [SpecialEvent](#specialevent)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![DELETE](https://img.shields.io/badge/DELETE-delete-red?style=flat-square =80x20) /special-events/{eventId}

**Summary:** Delete special event

Delete a special event from the collection. Allows museum to cancel planned events.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| eventId | path | string | Yes | Identifier for a special event. |

#### Responses

{{#tabs}}
  {{#tab title="204"}}
Success - no content.

No response body.

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
{{/tabs}}

---

### ![POST](https://img.shields.io/badge/POST-post-blue?style=flat-square =80x20) /tickets

**Summary:** Buy museum tickets

Purchase museum tickets for general entry or special events.

#### Request Body

**Content-Type:** `application/json`

**Schema:**

```json
{
  "$ref": "#/components/schemas/BuyMuseumTickets"
}
```

**References:** [BuyMuseumTickets](#buymuseumtickets)

#### Responses

{{#tabs}}
  {{#tab title="201"}}
Created.

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/MuseumTicketsConfirmation"
}
```

**References:** [MuseumTicketsConfirmation](#museumticketsconfirmation)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
{{/tabs}}

---

### ![GET](https://img.shields.io/badge/GET-get-brightgreen?style=flat-square =80x20) /tickets/{ticketId}/qr

**Summary:** Get ticket QR code

Return an image of your ticket with scannable QR code. Used for event entry.

#### Parameters

| Name | In | Type | Required | Description |
|------|----|----|----------|-------------|
| ticketId | path | string | Yes | Identifier for a ticket to a museum event. Used to generate ticket image. |

#### Responses

{{#tabs}}
  {{#tab title="200"}}
Scannable event ticket in image format.

**Content-Type:** `image/png`

```json
{
  "$ref": "#/components/schemas/TicketCodeImage"
}
```

**References:** [TicketCodeImage](#ticketcodeimage)

  {{/tab}}
  {{#tab title="400"}}
No response body.

  {{/tab}}
  {{#tab title="404"}}
No response body.

  {{/tab}}
{{/tabs}}

---

## Data Models

### TicketType {#tickettype}

Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.

```json
{
  "description": "Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.",
  "type": "string",
  "enum": [
    "event",
    "general"
  ],
  "example": "event"
}
```

### Date {#date}

```json
{
  "type": "string",
  "format": "date",
  "example": "2023-10-29"
}
```

### Email {#email}

Email address for ticket purchaser.

```json
{
  "description": "Email address for ticket purchaser.",
  "type": "string",
  "format": "email",
  "example": "museum-lover@example.com"
}
```

### BuyMuseumTickets {#buymuseumtickets}

Data to purchase a ticket.

```json
{
  "description": "Data to purchase a ticket.",
  "type": "object",
  "allOf": [
    {
      "type": "object",
      "properties": {
        "email": {
          "$ref": "#/components/schemas/Email"
        }
      }
    },
    {
      "$ref": "#/components/schemas/Ticket"
    }
  ]
}
```

### TicketMessage {#ticketmessage}

Confirmation message after a ticket purchase.

```json
{
  "description": "Confirmation message after a ticket purchase.",
  "type": "string",
  "example": "Museum general entry ticket purchased"
}
```

### TicketId {#ticketid}

Unique identifier for museum ticket. Generated when purchased.

```json
{
  "description": "Unique identifier for museum ticket. Generated when purchased.",
  "type": "string",
  "format": "uuid",
  "example": "a54a57ca-36f8-421b-a6b4-2e8f26858a4c"
}
```

### TicketConfirmation {#ticketconfirmation}

Unique confirmation code used to verify ticket purchase.

```json
{
  "description": "Unique confirmation code used to verify ticket purchase.",
  "type": "string",
  "example": "ticket-event-a98c8f-7eb12"
}
```

### Ticket {#ticket}

Ticket for museum entry, can be general admission or special event.

```json
{
  "description": "Ticket for museum entry, can be general admission or special event.",
  "type": "object",
  "properties": {
    "ticketId": {
      "$ref": "#/components/schemas/TicketId"
    },
    "ticketDate": {
      "description": "Date when this ticket can be used for museum entry.",
      "$ref": "#/components/schemas/Date"
    },
    "ticketType": {
      "$ref": "#/components/schemas/TicketType"
    },
    "eventId": {
      "description": "Unique identifier for a special event. Required if purchasing tickets for the museum's special events.",
      "$ref": "#/components/schemas/EventId"
    }
  },
  "required": [
    "ticketType",
    "ticketDate"
  ]
}
```

### MuseumTicketsConfirmation {#museumticketsconfirmation}

Details for a museum ticket after a successful purchase.

```json
{
  "description": "Details for a museum ticket after a successful purchase.",
  "allOf": [
    {
      "$ref": "#/components/schemas/Ticket"
    },
    {
      "type": "object",
      "properties": {
        "message": {
          "$ref": "#/components/schemas/TicketMessage"
        },
        "confirmationCode": {
          "$ref": "#/components/schemas/TicketConfirmation"
        }
      },
      "required": [
        "message",
        "confirmationCode"
      ]
    }
  ]
}
```

### TicketCodeImage {#ticketcodeimage}

Image of a ticket with a QR code used for museum or event entry.

```json
{
  "description": "Image of a ticket with a QR code used for museum or event entry.",
  "type": "string",
  "format": "binary"
}
```

### MuseumHours {#museumhours}

List of museum operating hours for a date range.

```json
{
  "description": "List of museum operating hours for a date range.",
  "type": "array",
  "items": {
    "$ref": "#/components/schemas/MuseumDailyHours"
  }
}
```

### MuseumDailyHours {#museumdailyhours}

Daily operating hours for the museum.

```json
{
  "description": "Daily operating hours for the museum.",
  "type": "object",
  "properties": {
    "date": {
      "description": "Date the operating hours apply to.",
      "$ref": "#/components/schemas/Date",
      "example": "2024-12-31"
    },
    "timeOpen": {
      "type": "string",
      "pattern": "^([01]\\d|2[0-3]):?([0-5]\\d)$",
      "description": "Time the museum opens on a specific date. Uses 24 hour time format (`HH:mm`).",
      "example": "09:00"
    },
    "timeClose": {
      "description": "Time the museum closes on a specific date. Uses 24 hour time format (`HH:mm`).",
      "type": "string",
      "pattern": "^([01]\\d|2[0-3]):?([0-5]\\d)$",
      "example": "18:00"
    }
  },
  "required": [
    "date",
    "timeOpen",
    "timeClose"
  ]
}
```

### EventId {#eventid}

Identifier for a special event.

```json
{
  "description": "Identifier for a special event.",
  "type": "string",
  "format": "uuid",
  "example": "3be6453c-03eb-4357-ae5a-984a0e574a54"
}
```

### EventName {#eventname}

Name of the special event.

```json
{
  "type": "string",
  "description": "Name of the special event.",
  "example": "Pirate Coding Workshop"
}
```

### EventLocation {#eventlocation}

Location where the special event is held.

```json
{
  "type": "string",
  "description": "Location where the special event is held.",
  "example": "Computer Room"
}
```

### EventDescription {#eventdescription}

Description of the special event.

```json
{
  "type": "string",
  "description": "Description of the special event.",
  "example": "Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang)."
}
```

### EventDates {#eventdates}

List of planned dates for the special event.

```json
{
  "type": "array",
  "items": {
    "$ref": "#/components/schemas/Date"
  },
  "description": "List of planned dates for the special event."
}
```

### EventPrice {#eventprice}

Price of a ticket for the special event.

```json
{
  "description": "Price of a ticket for the special event.",
  "type": "number",
  "format": "float",
  "example": 25
}
```

### SpecialEventFields {#specialeventfields}

```json
{
  "type": "object",
  "properties": {
    "name": {
      "$ref": "#/components/schemas/EventName"
    },
    "location": {
      "$ref": "#/components/schemas/EventLocation"
    },
    "eventDescription": {
      "$ref": "#/components/schemas/EventDescription"
    },
    "dates": {
      "$ref": "#/components/schemas/EventDates"
    },
    "price": {
      "$ref": "#/components/schemas/EventPrice"
    }
  }
}
```

### SpecialEvent {#specialevent}

```json
{
  "type": "object",
  "properties": {
    "eventId": {
      "$ref": "#/components/schemas/EventId"
    },
    "name": {
      "$ref": "#/components/schemas/EventName"
    },
    "location": {
      "$ref": "#/components/schemas/EventLocation"
    },
    "eventDescription": {
      "$ref": "#/components/schemas/EventDescription"
    },
    "dates": {
      "$ref": "#/components/schemas/EventDates"
    },
    "price": {
      "$ref": "#/components/schemas/EventPrice"
    }
  },
  "required": [
    "name",
    "location",
    "eventDescription",
    "dates",
    "price"
  ]
}
```

### SpecialEventCollection {#specialeventcollection}

List of upcoming special events.

```json
{
  "description": "List of upcoming special events.",
  "type": "array",
  "items": {
    "$ref": "#/components/schemas/SpecialEvent"
  }
}
```

### Error {#error}

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "example": "object"
    },
    "title": {
      "type": "string",
      "example": "Validation failed"
    }
  }
}
```

