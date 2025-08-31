---
title: "Museum API"
description: "Complete API documentation for the Redocly Museum API - manage events, tickets, and operations"
author: "Generated from OpenAPI Spec"
version: "1.2.1"
api_base_url: "https://redocly.com/_mock/docs/openapi/museum-api"
handlebars: true
---

# 🏛️ Museum API Documentation

{{badge version}} {{badge "REST API" "success"}} 


An imaginary, but delightful Museum API for interacting with museum services and information. 

:::tip
**🎯 Quick Start:**
Ready to get started? Jump to [Authentication](#authentication) or explore our [Interactive Examples](#interactive-examples) below!
:::

## 📋 Overview

The Museum API offers a comprehensive set of endpoints to interact with museum services, including:

- **🕐 Operating Hours** - Retrieve museum operational schedules
- **🎪 Special Events** - Manage and discover museum events  
- **🎫 Ticketing** - Purchase tickets and generate QR codes
- **📱 Digital Services** - Mobile-friendly ticket management

**Base URL:** `{{{api_base_url}}}`

## 🔐 Authentication

:::warning 
**Development Only**:
This API uses basic HTTP authentication for demonstration purposes. In production, use secure authentication methods like OAuth 2.0 or API keys.
:::

```bash
curl -H "Authorization: Basic <credentials>" \
     {{{api_base_url}}}/museum-hours
```

## 🎪 Special Events

Discover and manage special events at the museum.

### List Special Events

:::tabs
:::tab cURL
```bash
# Get upcoming events
curl -X GET "{{api_base_url}}/special-events" \
  -H "Authorization: Basic <credentials>" \
  -H "Accept: application/json"

# Filter by date range
curl -X GET "{{api_base_url}}/special-events?startDate=2023-10-01&endDate=2023-12-31" \
  -H "Authorization: Basic <credentials>"
```
:::
:::tab JavaScript
```javascript
const apiUrl = '{{api_base_url}}';

async function getSpecialEvents(startDate, endDate) {
  const params = new URLSearchParams();
  if (startDate) params.append('startDate', startDate);
  if (endDate) params.append('endDate', endDate);
  
  const response = await fetch(`${apiUrl}/special-events?${params}`, {
    headers: {
      'Authorization': 'Basic ' + btoa('username:password'),
      'Accept': 'application/json'
    }
  });
  
  return response.json();
}

// Usage
const events = await getSpecialEvents('2023-10-01', '2023-12-31');
console.log('Upcoming events:', events);
```
:::
:::tab Python
```python
import requests
from datetime import datetime

def get_special_events(start_date=None, end_date=None):
    url = "{{api_base_url}}/special-events"
    
    params = {}
    if start_date:
        params['startDate'] = start_date
    if end_date:
        params['endDate'] = end_date
    
    response = requests.get(
        url,
        params=params,
        auth=('username', 'password'),
        headers={'Accept': 'application/json'}
    )
    
    return response.json()

# Usage
events = get_special_events('2023-10-01', '2023-12-31')
print(f"Found {len(events)} upcoming events")
```
:::
:::

**Response Example:**
```json
[
  {
    "eventId": "f3e0e76e-e4a8-466e-ab9c-ae36c15b8e97",
    "name": "Sasquatch Ballet",
    "location": "Seattle... probably",
    "eventDescription": "They're big, they're hairy, but they're also graceful. Come learn how the biggest feet can have the lightest touch.",
    "dates": ["2023-12-15", "2023-12-22"],
    "price": 40
  },
  {
    "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54", 
    "name": "Pirate Coding Workshop",
    "location": "Computer Room",
    "eventDescription": "Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang).",
    "dates": ["2023-10-29", "2023-10-30", "2023-10-31"],
    "price": 45
  }
]
```

### Create Special Event

:::tabs
:::tab cURL
```bash
curl -X POST "{{api_base_url}}/special-events" \
  -H "Authorization: Basic <credentials>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dragon Fossil Discovery Workshop",
    "location": "Paleontology Lab",
    "eventDescription": "Hands-on workshop discovering and analyzing dragon fossils with our expert paleontologists.",
    "dates": ["2024-03-15", "2024-03-22"],
    "price": 35
  }'
```
:::
:::tab JavaScript  
```javascript
async function createSpecialEvent(eventData) {
  const response = await fetch('{{api_base_url}}/special-events', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa('username:password'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });
  
  return response.json();
}

// Usage
const newEvent = await createSpecialEvent({
  name: "Dragon Fossil Discovery Workshop",
  location: "Paleontology Lab", 
  eventDescription: "Hands-on workshop discovering and analyzing dragon fossils.",
  dates: ["2024-03-15", "2024-03-22"],
  price: 35
});
```
:::
:::tab Python
```python
def create_special_event(event_data):
    response = requests.post(
        "{{api_base_url}}/special-events",
        json=event_data,
        auth=('username', 'password'),
        headers={'Content-Type': 'application/json'}
    )
    return response.json()

# Usage  
new_event = create_special_event({
    "name": "Dragon Fossil Discovery Workshop",
    "location": "Paleontology Lab",
    "eventDescription": "Hands-on workshop discovering and analyzing dragon fossils.",
    "dates": ["2024-03-15", "2024-03-22"], 
    "price": 35
})
```
:::
:::

## 🎫 Ticketing System

Purchase tickets for general museum entry or special events.

### Buy Museum Tickets

:::tabs
:::tab General Entry
```bash
# Buy general admission ticket
curl -X POST "{{api_base_url}}/tickets" \
  -H "Authorization: Basic <credentials>" \
  -H "Content-Type: application/json" \
  -d '{
    "ticketType": "general",
    "ticketDate": "2024-03-20",
    "email": "visitor@example.com"
  }'
```

**Response:**
```json
{
  "message": "Museum general entry ticket purchased",
  "ticketId": "382c0820-0530-4f4b-99af-13811ad0f17a",
  "ticketType": "general",
  "ticketDate": "2024-03-20",
  "confirmationCode": "ticket-general-e5e5c6-dce78"
}
```
:::
:::tab Event Ticket
```bash
# Buy special event ticket
curl -X POST "{{api_base_url}}/tickets" \
  -H "Authorization: Basic <credentials>" \
  -H "Content-Type: application/json" \
  -d '{
    "ticketType": "event",
    "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54",
    "ticketDate": "2023-10-29",
    "email": "coder@example.com"
  }'
```

**Response:**
```json
{
  "message": "Museum special event ticket purchased",
  "ticketId": "b811f723-17b2-44f7-8952-24b03e43d8a9",
  "eventName": "Pirate Coding Workshop",
  "ticketType": "event", 
  "ticketDate": "2023-10-29",
  "confirmationCode": "ticket-event-9c55eg-8v82a"
}
```
:::
:::

### Get Ticket QR Code

Generate a scannable QR code for museum entry:

:::tabs
:::tab cURL
```bash
curl -X GET "{{api_base_url}}/tickets/382c0820-0530-4f4b-99af-13811ad0f17a/qr" \
  -H "Authorization: Basic <credentials>" \
  -H "Accept: image/png" \
  --output ticket-qr.png
```
:::
:::tab JavaScript
```javascript
async function getTicketQR(ticketId) {
  const response = await fetch(`{{api_base_url}}/tickets/${ticketId}/qr`, {
    headers: {
      'Authorization': 'Basic ' + btoa('username:password'),
      'Accept': 'image/png'
    }
  });
  
  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);
  
  // Display in an img element
  document.getElementById('qr-code').src = imageUrl;
}
```
:::
:::tab Python
```python
def download_ticket_qr(ticket_id, filename):
    response = requests.get(
        f"{{api_base_url}}/tickets/{ticket_id}/qr",
        auth=('username', 'password'),
        headers={'Accept': 'image/png'}
    )
    
    with open(filename, 'wb') as f:
        f.write(response.content)
    
    print(f"QR code saved as {filename}")

# Usage
download_ticket_qr("382c0820-0530-4f4b-99af-13811ad0f17a", "my-ticket.png")
```
:::
:::

:::tip
**📱 Mobile Integration:**
The QR codes work great with mobile ticket wallets! Display the QR code in your mobile app for easy museum entry.
:::

## 🕐 Museum Operations

### Get Museum Hours

Retrieve upcoming museum operating hours with flexible date filtering:

:::tabs
:::tab cURL
```bash
# Get hours for next 10 days
curl -X GET "{{api_base_url}}/museum-hours" \
  -H "Authorization: Basic <credentials>"

# Get hours for specific date range
curl -X GET "{{api_base_url}}/museum-hours?startDate=2024-03-01&page=1&limit=20" \
  -H "Authorization: Basic <credentials>"
```
:::
:::tab JavaScript
```javascript
async function getMuseumHours(startDate, page = 1, limit = 10) {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString()
  });
  
  if (startDate) {
    params.append('startDate', startDate);
  }
  
  const response = await fetch(`{{api_base_url}}/museum-hours?${params}`, {
    headers: {
      'Authorization': 'Basic ' + btoa('username:password'),
      'Accept': 'application/json'
    }
  });
  
  return response.json();
}

// Get this week's hours
const hours = await getMuseumHours('2024-03-01', 1, 7);
console.log('Museum hours:', hours);
```
:::
:::tab Python
```python
def get_museum_hours(start_date=None, page=1, limit=10):
    params = {
        'page': page,
        'limit': limit
    }
    
    if start_date:
        params['startDate'] = start_date
    
    response = requests.get(
        "{{api_base_url}}/museum-hours",
        params=params,
        auth=('username', 'password'),
        headers={'Accept': 'application/json'}
    )
    
    return response.json()

# Get next week's hours
from datetime import datetime, timedelta
next_week = (datetime.now() + timedelta(days=7)).strftime('%Y-%m-%d')
hours = get_museum_hours(start_date=next_week, limit=7)
```
:::
:::

**Response Example:**
```json
[
  {
    "date": "2023-09-11",
    "timeOpen": "09:00", 
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-12",
    "timeOpen": "09:00",
    "timeClose": "18:00" 
  },
  {
    "date": "2023-09-15",
    "timeOpen": "10:00",
    "timeClose": "16:00"
  }
]
```

## 🎭 Featured Events

Here are some of the exciting special events you can experience:

:::neutral
**🏴‍☠️ Pirate Coding Workshop**  
**Location:** Computer Room  
**Price:** $45  
**Dates:** Oct 29-31, 2023

Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang). Perfect for developers who want to learn programming with a nautical twist!
:::

:::neutral
**🧜‍♀️ Mermaid Treasure Analysis**  
**Location:** Room Sea-12  
**Price:** $30  
**Dates:** Sep 5 & 8, 2023  

Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits — kindly donated by Ariel.
:::

:::tip
**🦙 Llama Street Art Through the Ages**  
**Location:** Auditorium  
**Price:** $45  
**Dates:** Oct 29-31, 2023

Llama street art?! Alpaca my bags -- let's go! Explore the fascinating world of camelid-inspired urban art.
:::

## 📚 API Reference

### Operations

#### :::badge-primary GET ::: `/museum-hours`

Get upcoming museum operating hours with optional date filtering and pagination.

**Parameters:**
- `startDate` (query, optional): Starting date (defaults to today)
- `page` (query, optional): Page number (default: 1)  
- `limit` (query, optional): Results per page (default: 10, max: 30)

### Events

#### :::badge-success POST ::: `/special-events` 
Create a new special event

#### :::badge-primary GET ::: `/special-events`
List upcoming special events

#### :::badge-primary GET ::: `/special-events/{eventId}`
Get details about a specific event

#### :::badge-warning PATCH ::: `/special-events/{eventId}`
Update event details

#### :::badge-danger DELETE ::: `/special-events/{eventId}`
Cancel/delete an event

### Tickets

#### :::badge-success POST ::: `/tickets`
Purchase museum tickets (general or event-specific)

#### :::badge-primary GET ::: `/tickets/{ticketId}/qr`  
Generate scannable QR code for ticket

:::tip
**💡 Pro Tips:**
- Use `ticketType: "general"` for regular museum admission
- Use `ticketType: "event"` with an `eventId` for special events
- QR codes are returned as PNG images perfect for mobile wallets
- All dates use ISO format (YYYY-MM-DD)
:::

## 🏗️ Data Models

### Special Event Structure

```json
{
  "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54",
  "name": "Pirate Coding Workshop", 
  "location": "Computer Room",
  "eventDescription": "Captain Blackbeard shares his love of the C...language.",
  "dates": ["2023-10-29", "2023-10-30", "2023-10-31"],
  "price": 45
}
```

### Ticket Structure

```json
{
  "ticketId": "b811f723-17b2-44f7-8952-24b03e43d8a9",
  "ticketType": "event",
  "ticketDate": "2023-10-29", 
  "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54",
  "confirmationCode": "ticket-event-9c55eg-8v82a",
  "message": "Museum special event ticket purchased"
}
```

### Museum Hours Structure

```json
{
  "date": "2023-09-11",
  "timeOpen": "09:00",
  "timeClose": "18:00"
}
```

## 🔄 Webhooks

The Museum API supports webhooks for real-time event notifications:

### New Event Published

When a new special event is created or updated, a webhook is triggered:

**Endpoint:** Your configured webhook URL  
**Method:** POST  
**Content-Type:** application/json

```json
{
  "eventId": "dad4bce8-f5cb-4078-a211-995864315e39",
  "name": "Mermaid Treasure Identification and Analysis",
  "location": "Room Sea-12", 
  "eventDescription": "Join us as we review and classify a rare collection...",
  "dates": ["2023-09-05", "2023-09-08"],
  "price": 30
}
```

## 💡 Interactive Examples

### Complete Ticket Purchase Flow

:::tabs
:::tab Workflow
```javascript
// 1. Get available events
const events = await getSpecialEvents();
const pirateWorkshop = events.find(e => e.name.includes('Pirate'));

// 2. Purchase event ticket
const ticket = await fetch('{{api_base_url}}/tickets', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + btoa('username:password'),
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ticketType: 'event',
    eventId: pirateWorkshop.eventId,
    ticketDate: pirateWorkshop.dates[0],
    email: 'ahoy@pirate.com'
  })
}).then(r => r.json());

// 3. Generate QR code for entry
const qrResponse = await fetch(`{{api_base_url}}/tickets/${ticket.ticketId}/qr`, {
  headers: {
    'Authorization': 'Basic ' + btoa('username:password'),
    'Accept': 'image/png'
  }
});

const qrBlob = await qrResponse.blob();
// Display QR code in your app
```
:::
:::tab Museum Hours Check
```javascript
// Get today's museum hours
const today = new Date().toISOString().split('T')[0];
const todayHours = await getMuseumHours(today, 1, 1);

if (todayHours.length > 0) {
  const hours = todayHours[0];
  console.log(`Museum is open today from ${hours.timeOpen} to ${hours.timeClose}`);
} else {
  console.log('Museum is closed today');
}
```
:::
:::

## 🚀 Getting Started

1. **Get API Access**: Contact the museum for API credentials
2. **Choose Your Use Case**:
   - Building a mobile app? Start with [ticketing endpoints](#ticketing-system)
   - Creating an events calendar? Check out [special events](#special-events)
   - Need operating hours? Use the [museum hours endpoint](#get-museum-hours)
3. **Test in Development**: Use the mock server at `{{api_base_url}}`
4. **Implement Error Handling**: All endpoints return standard HTTP status codes

:::note
**📖 Learning Resource:**
This API is designed by [Redocly](https://redocly.com/docs/resources/learning-openapi/) as an educational example for learning OpenAPI 3.1.0 specification. It's perfect for testing API documentation tools and learning REST API design patterns.
:::

## 📞 Support

**Documentation:** [Redocly OpenAPI Learning Resources](https://redocly.com/docs/resources/learning-openapi/)  
**Contact:** team@redocly.com  
**License:** [MIT License](https://opensource.org/license/mit/)

---

*Generated from OpenAPI 3.1.0 specification • Last updated: {{version}}* 