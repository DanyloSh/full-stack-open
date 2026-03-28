# 0.6: New note in SPA diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes text and clicks Save in SPA
    Note right of browser: JavaScript intercepts form submit and prevents page reload

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: Server stores the new note
    server-->>browser: 201 Created (JSON response)
    deactivate server

    Note right of browser: Browser updates local notes state
    Note right of browser: Browser re-renders notes list, showing the new note immediately
```
