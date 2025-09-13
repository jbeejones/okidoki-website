---
title: API Reference
description: API documentation generated from OpenAPI specification
---

# Tic Tac Toe

This API allows writing down marks on a Tic Tac Toe board
and requesting the state of the board or of individual squares.


{{#alert}} 
Created from [https://learn.openapis.org/examples/v3.0/api-with-examples.html
](https://learn.openapis.org/examples/v3.0/api-with-examples.html).

Example OkiDoki openapi CLI command:

```bash
okidoki openapi -i openapi/openapiexample.yaml -o docs/examples/openapiexample.md
```
{{/alert}}

**Version:** 1.0.0

## Endpoints

### {{badge "GET" "success"}} /board

**Summary:** Get the whole board

Retrieves the current state of the board and the winner.

#### Responses

**200** - OK

*Content-Type:* `application/json`

```json
{
  "$ref": "#/components/schemas/status"
}
```

**References:** [status](#status)

---

### {{badge "GET" "success"}} /board/{row}/{column}

**Summary:** Get a single board square

Retrieves the requested square.

#### Responses

{{#tabs}}
  {{#tab title="200"}}
OK

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/mark"
}
```

**References:** [mark](#mark)

  {{/tab}}
  {{#tab title="400"}}
The provided parameters are incorrect

**Content-Type:** `text/html`

```json
{
  "$ref": "#/components/schemas/errorMessage"
}
```

**References:** [errorMessage](#errormessage)

  {{/tab}}
{{/tabs}}

---

### {{badge "PUT" "warning"}} /board/{row}/{column}

**Summary:** Set a single board square

Places a mark on the board and retrieves the whole board and the winner (if any).

#### Request Body

**Content-Type:** `application/json`

**Schema:**

```json
{
  "$ref": "#/components/schemas/mark"
}
```

**References:** [mark](#mark)

#### Responses

{{#tabs}}
  {{#tab title="200"}}
OK

**Content-Type:** `application/json`

```json
{
  "$ref": "#/components/schemas/status"
}
```

**References:** [status](#status)

  {{/tab}}
  {{#tab title="400"}}
The provided parameters are incorrect

**Content-Type:** `text/html`

```json
{
  "$ref": "#/components/schemas/errorMessage"
}
```

**References:** [errorMessage](#errormessage)

  {{/tab}}
{{/tabs}}

---

## Data Models

### errorMessage {#errormessage}

A text message describing an error

```json
{
  "type": "string",
  "maxLength": 256,
  "description": "A text message describing an error"
}
```

### coordinate {#coordinate}

```json
{
  "type": "integer",
  "minimum": 1,
  "maximum": 3,
  "example": 1
}
```

### mark {#mark}

Possible values for a board square. `.` means empty square.

```json
{
  "type": "string",
  "enum": [
    ".",
    "X",
    "O"
  ],
  "description": "Possible values for a board square. `.` means empty square.",
  "example": "."
}
```

### board {#board}

```json
{
  "type": "array",
  "maxItems": 3,
  "minItems": 3,
  "items": {
    "type": "array",
    "maxItems": 3,
    "minItems": 3,
    "items": {
      "$ref": "#/components/schemas/mark"
    }
  }
}
```

### winner {#winner}

Winner of the game. `.` means nobody has won yet.

```json
{
  "type": "string",
  "enum": [
    ".",
    "X",
    "O"
  ],
  "description": "Winner of the game. `.` means nobody has won yet.",
  "example": "."
}
```

### status {#status}

```json
{
  "type": "object",
  "properties": {
    "winner": {
      "$ref": "#/components/schemas/winner"
    },
    "board": {
      "$ref": "#/components/schemas/board"
    }
  }
}
```

