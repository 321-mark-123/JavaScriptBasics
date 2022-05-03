# Mermaid Demo
```mermaid
flowchart TD;
A[Login]==> B[Daten korrekt?]
B==>|ja| C[Succes]
C==>|redirect|E[Dashboard]
B-.->|nein| D[Error]
D-.->|redirect|A[Login] 

```