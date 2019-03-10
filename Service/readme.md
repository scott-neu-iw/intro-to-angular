# Backend API
## Installation
View[https://docs.microsoft.com/en-us/dotnet/core/windows-prerequisites?tabs=netcore21]
## Execution
- Open in Visual Studio and Start
- Run command line
```
cd [path]\Iw.Services\Iw.Services.Api
dotnet run
```
## Endpoints

#### Get All ToDo Items
Retrieves all the ToDo items
>Endpoint:
```
GET: /v1/todotitems
```
>Response:
```
[
    {
        "id": 1,
        "name": "First To Do Item",
        "description": "I really need to get this done",
        "createDate": "2018-08-01T00:00:00",
        "dueDate": "2018-10-01T00:00:00",
        "assignedTo": "Scott Neu",
        "completedDate": null,
        "completedBy": null,
        "completed": false,
        "isPastDue": false,
        "isLate": false
    },
    {
        "id": 2,
        "name": "Another Really Important Item",
        "description": "Something super important",
        "createDate": "2018-08-03T00:00:00",
        "dueDate": "2018-09-15T00:00:00",
        "assignedTo": "Ryan Jackson",
        "completedDate": null,
        "completedBy": null,
        "completed": false,
        "isPastDue": false,
        "isLate": false
	}
]
```

#### Get Filtered ToDo Items
Retrieves a filtered list of the ToDo items

>Endpoint:
```
GET: /v1/todotitems?name={nameFilter}&late={true|false}&pastdue={true|false}&completed={true|false}
```
>Response:
```
[
    {
        "id": 1,
        "name": "First To Do Item",
        "description": "I really need to get this done",
        "createDate": "2018-08-01T00:00:00",
        "dueDate": "2018-10-01T00:00:00",
        "assignedTo": "Scott Neu",
        "completedDate": null,
        "completedBy": null,
        "completed": false,
        "isPastDue": false,
        "isLate": false
    }
]
```

#### Get Specific ToDo Item
Retrieves a specific ToDo item

>Endpoint:
```
GET: /v1/todotitems/{id}
```
>Response:
```
{
    "id": 2,
    "name": "Another Really Important Item",
    "description": "Something super important",
    "createDate": "2018-08-03T00:00:00",
    "dueDate": "2018-09-15T00:00:00",
    "assignedTo": "Ryan Jackson",
    "completedDate": null,
    "completedBy": null,
    "completed": false,
    "isPastDue": false,
    "isLate": false
}
```
#### Create a New ToDo Item
Creates a new ToDo item

>Endpoint:
```
POST: /v1/todotitems
```
>Body:
```
{
    "name": "name", (required)
    "description": "description", (required)
    "dueDate": "2018-09-15T00:00:00", (optional)
    "assignedTo": "Ryan Jackson" (optional)
}
```
>Response:
```
{
    "id": 10,
    "name": "name",
    "description": "description",
    "createDate": "2018-08-03T00:00:00",
    "dueDate": "2018-09-15T00:00:00",
    "assignedTo": "Ryan Jackson",
    "completedDate": null,
    "completedBy": null,
    "completed": false,
    "isPastDue": false,
    "isLate": false
}
```

#### Update an Existing ToDo Item
Update an existing ToDo item

>Endpoint:
```
PUT: /v1/todotitems/{id}
```
>Body:
```
{
    "name": "new name", (required)
    "description": "new description", (required)
    "dueDate": "2018-09-15T00:00:00", (optional)
    "assignedTo": "new Assignnee" (optional)
}
```
>Response:
```
{
    "id": 10,
    "name": "new name",
    "description": "new description",
    "createDate": "2018-08-03T00:00:00",
    "dueDate": "2018-09-15T00:00:00",
    "assignedTo": "new Assignnee",
    "completedDate": null,
    "completedBy": null,
    "completed": false,
    "isPastDue": false,
    "isLate": false
}
```
#### Delete an Existing ToDo Item
Delete an existing ToDo item

>Endpoint:
```
DELETE: /v1/todotitems/{id}
```
>Response: standard HTTP status codes

#### Complete a ToDo Item
Completes an existing ToDo item.  The onDate field is optional, if it is not supplied, the server will create the date.

>Endpoint:
```
PATCH: /v1/todotitems/{id}/complete
```
>Body:
```
{
    "byUser": "First Last", (required)
    "onDate": "2018-09-15T00:00:00", (optional)
}
```
>Response:
```
{
    "id": 10,
    "name": "new name",
    "description": "new description",
    "createDate": "2018-08-03T00:00:00",
    "dueDate": "2018-09-15T00:00:00",
    "assignedTo": "new Assignnee",
    "completedDate": "2018-09-15T00:00:00",
    "completedBy": "First Last",
    "completed": false,
    "isPastDue": false,
    "isLate": false
}
```




