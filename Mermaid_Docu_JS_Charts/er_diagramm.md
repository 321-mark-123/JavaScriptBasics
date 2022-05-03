# Mermaid Demo
```mermaid
erDiagram
    USER ||--|{ POST : created
    USER{
        int ID
        string name
        string firstname
        string username
        int age
    }
     POST{
        int ID 
        string title
        string date
        string comment
    
    }
```