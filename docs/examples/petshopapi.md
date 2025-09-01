---
title: Petshop API (example)
handlebars: true
---

# {{title}}

{{#alert type="info"}}
**Base URL**: {{{api_base_url}}}

**Authentication**: Bearer token required for all endpoints.
{{/alert}}

## Overview

Welcome to the Petshop API documentation! This RESTful API allows you to manage pets, owners, appointments, and services for your pet store or veterinary clinic.

{{#alert type="warning"}}
**Rate Limit**: 1000 requests per hour per API key.
{{/alert}}

---

## Pets Management

### Create Pet {{badge "POST" "primary"}}

Add a new pet to the system.

**Endpoint**: `/pets`

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const newPet = await fetch('{{api_base_url}}/pets', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
        name: 'Buddy',
        species: 'dog',
        breed: 'Golden Retriever',
        age: 3,
        owner_id: 12345,
        color: 'Golden',
        weight: 30.5
    })
});

const pet = await newPet.json();
console.log('Created pet:', pet);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

response = requests.post('{{api_base_url}}/pets', 
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'name': 'Buddy',
        'species': 'dog',
        'breed': 'Golden Retriever',
        'age': 3,
        'owner_id': 12345,
        'color': 'Golden',
        'weight': 30.5
    }
)

pet = response.json()
print(f'Created pet: {pet}')
```
  {{/tab}}
  {{#tab title="cURL"}}
```bash
curl -X POST '{{api_base_url}}/pets' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Buddy",
    "species": "dog",
    "breed": "Golden Retriever",
    "age": 3,
    "owner_id": 12345,
    "color": "Golden",
    "weight": 30.5
  }'
```
  {{/tab}}
{{/tabs}}

{{#alert type="success"}}
**Success Response**: Pet created with status code `201`
{{/alert}}

### Get Pet {{badge "GET" "secondary"}}

Retrieve a specific pet's information.

**Endpoint**: `/pets/{pet_id}`

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const response = await fetch('{{api_base_url}}/pets/123', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
});

const pet = await response.json();
console.log('Pet details:', pet);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

response = requests.get('{{api_base_url}}/pets/123',
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

pet = response.json()
print(f'Pet details: {pet}')
```
  {{/tab}}
{{/tabs}}

### Update Pet {{badge "PUT" "warning"}}

Update an existing pet's information.

**Endpoint**: `/pets/{pet_id}`

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const updatedPet = await fetch('{{api_base_url}}/pets/123', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
        name: 'Buddy Updated',
        weight: 32.0,
        age: 4
    })
});

const pet = await updatedPet.json();
console.log('Updated pet:', pet);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

response = requests.put('{{api_base_url}}/pets/123',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'name': 'Buddy Updated',
        'weight': 32.0,
        'age': 4
    }
)

pet = response.json()
print(f'Updated pet: {pet}')
```
  {{/tab}}
{{/tabs}}

### Delete Pet {{badge "DELETE" "error"}}

Remove a pet from the system.

**Endpoint**: `/pets/{pet_id}`

{{#alert type="warning"}}
**Warning**: This action cannot be undone. All associated records will be removed.
{{/alert}}

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const response = await fetch('{{api_base_url}}/pets/123', {
    method: 'DELETE',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
});

if (response.ok) {
    console.log('Pet deleted successfully');
}
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

response = requests.delete('{{api_base_url}}/pets/123',
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

if response.status_code == 204:
    print('Pet deleted successfully')
```
  {{/tab}}
{{/tabs}}

---

## Owners Management

### Create Owner {{badge "POST" "primary"}}

Register a new pet owner.

**Endpoint**: `/owners`

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const newOwner = await fetch('{{api_base_url}}/owners', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
        first_name: 'Sarah',
        last_name: 'Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1-555-123-4567',
        address: {
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip_code: '12345'
        }
    })
});

const owner = await newOwner.json();
console.log('Created owner:', owner);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

response = requests.post('{{api_base_url}}/owners',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'first_name': 'Sarah',
        'last_name': 'Johnson',
        'email': 'sarah.johnson@email.com',
        'phone': '+1-555-123-4567',
        'address': {
            'street': '123 Main St',
            'city': 'Anytown',
            'state': 'CA',
            'zip_code': '12345'
        }
    }
)

owner = response.json()
print(f'Created owner: {owner}')
```
  {{/tab}}
{{/tabs}}

### List Owners {{badge "GET" "secondary"}}

Get all pet owners with pagination.

**Endpoint**: `/owners`

**Query Parameters**:
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)
- `search` (optional): Search by name or email

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const response = await fetch('{{api_base_url}}/owners?page=1&limit=10&search=sarah', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
});

const data = await response.json();
console.log('Owners:', data.owners);
console.log('Total:', data.total);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

params = {
    'page': 1,
    'limit': 10,
    'search': 'sarah'
}

response = requests.get('{{api_base_url}}/owners',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    params=params
)

data = response.json()
print(f'Owners: {data["owners"]}')
print(f'Total: {data["total"]}')
```
  {{/tab}}
{{/tabs}}

---

## Appointments

### Schedule Appointment {{badge "POST" "primary"}}

Book a new appointment for a pet.

**Endpoint**: `/appointments`

{{#alert type="info"}}
**Business Hours**: Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 4:00 PM
{{/alert}}

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const appointment = await fetch('{{api_base_url}}/appointments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
        pet_id: 123,
        service_type: 'checkup',
        appointment_date: '2024-02-15',
        appointment_time: '14:30',
        notes: 'Annual wellness check',
        veterinarian_id: 456
    })
});

const result = await appointment.json();
console.log('Scheduled appointment:', result);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests
from datetime import datetime

response = requests.post('{{api_base_url}}/appointments',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'pet_id': 123,
        'service_type': 'checkup',
        'appointment_date': '2024-02-15',
        'appointment_time': '14:30',
        'notes': 'Annual wellness check',
        'veterinarian_id': 456
    }
)

appointment = response.json()
print(f'Scheduled appointment: {appointment}')
```
  {{/tab}}
{{/tabs}}

{{#alert type="success"}}
**Success Response**: Appointment scheduled with confirmation number
{{/alert}}

### Get Available Slots {{badge "GET" "secondary"}}

Check available appointment slots for a specific date.

**Endpoint**: `/appointments/available`

**Query Parameters**:
- `date` (required): Date in YYYY-MM-DD format
- `service_type` (optional): Filter by service type
- `veterinarian_id` (optional): Filter by veterinarian

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const response = await fetch('{{api_base_url}}/appointments/available?date=2024-02-15&service_type=checkup', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
});

const slots = await response.json();
console.log('Available slots:', slots);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

params = {
    'date': '2024-02-15',
    'service_type': 'checkup'
}

response = requests.get('{{api_base_url}}/appointments/available',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    params=params
)

slots = response.json()
print(f'Available slots: {slots}')
```
  {{/tab}}
{{/tabs}}

---

## Services

### List Services {{badge "GET" "secondary"}}

Get all available pet services and their pricing.

**Endpoint**: `/services`

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const response = await fetch('{{api_base_url}}/services', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
});

const services = await response.json();
console.log('Available services:', services);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

response = requests.get('{{api_base_url}}/services',
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

services = response.json()
print(f'Available services: {services}')
```
  {{/tab}}
{{/tabs}}

---

## Medical Records

### Add Medical Record {{badge "POST" "primary"}}

Add a new medical record for a pet.

**Endpoint**: `/pets/{pet_id}/medical-records`

{{#alert type="warning"}}
**HIPAA Compliance**: All medical records are encrypted and access is logged.
{{/alert}}

{{#tabs}}
  {{#tab title="JavaScript"}}
```javascript
const record = await fetch('{{api_base_url}}/pets/123/medical-records', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
        visit_date: '2024-02-15',
        veterinarian_id: 456,
        diagnosis: 'Healthy - routine checkup',
        treatment: 'Vaccinations updated',
        medications: [
            {
                name: 'Rabies Vaccine',
                dosage: '1ml',
                frequency: 'Annual'
            }
        ],
        next_visit: '2025-02-15',
        notes: 'Pet is in excellent health'
    })
});

const medicalRecord = await record.json();
console.log('Medical record created:', medicalRecord);
```
  {{/tab}}
  {{#tab title="Python"}}
```python
import requests

response = requests.post('{{api_base_url}}/pets/123/medical-records',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'visit_date': '2024-02-15',
        'veterinarian_id': 456,
        'diagnosis': 'Healthy - routine checkup',
        'treatment': 'Vaccinations updated',
        'medications': [
            {
                'name': 'Rabies Vaccine',
                'dosage': '1ml',
                'frequency': 'Annual'
            }
        ],
        'next_visit': '2025-02-15',
        'notes': 'Pet is in excellent health'
    }
)

medical_record = response.json()
print(f'Medical record created: {medical_record}')
```
  {{/tab}}
{{/tabs}}

---

## Error Handling

{{#alert type="error"}}
**Error Response Format**: All errors follow a consistent JSON structure
{{/alert}}

```json
{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Invalid input data",
        "details": [
            {
                "field": "email",
                "message": "Email format is invalid"
            }
        ]
    }
}
```

### Common HTTP Status Codes

| Status | Description |
|--------|-------------|
| `200` | Success |
| `201` | Created successfully |
| `400` | Bad Request - Invalid input |
| `401` | Unauthorized - Invalid API key |
| `403` | Forbidden - Insufficient permissions |
| `404` | Not Found |
| `429` | Too Many Requests - Rate limit exceeded |
| `500` | Internal Server Error |

---

## Rate Limits

{{#alert type="info"}}
**Current Limits**:
- **Free Tier**: 100 requests/hour
- **Pro Tier**: 1,000 requests/hour
- **Enterprise**: Unlimited

Rate limit headers are included in all responses.
{{/alert}}

---

## SDKs and Tools

{{#alert type="success"}}
**Official SDKs Available**:
- JavaScript/TypeScript
- Python
- PHP
- Ruby
- Go

**Postman Collection**: Available for easy API testing
{{/alert}}