# Mermaid Demo
```mermaid

sequenceDiagram

    participant fe as Web Front-End
    participant be as Backend-End
    participant auth as Auth Provider

    fe -->>be: anmelden mit creditials
    be -->>auth: leitet die anmeldinfos weiter
    auth -->>be: respond token
    be-->>fe: login wird erstellt

    alt Credentials not found
        be->>fe: kein PAsswort oder Nutzername gefund
    else Credentials not found

        end
    

```