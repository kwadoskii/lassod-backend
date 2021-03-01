# Strapi application

After cloing the repo

```sh
run npm install
run npm strapi develop
```

#### Graphql url
http://localhost:1337/graphql

#### endpoints to target
1. Create Products http://localhost:1337/products [POST]

```sh
payload: 
{
    "name": "Apple Mac Book Pro",
    "SKU": "6000"
}
```

```sh
response: 
{
    "id": 10,
    "name": "Apple Mac Book Pro",
    "SKU": "6000",
    "stock": null,
    "created_at": "2021-03-01T08:08:56.048Z",
    "updated_at": "2021-03-01T08:08:56.048Z"
}
```

2. Create warehouse http://localhost:1337/warehouses [POST]

```sh
payload:
{
    "number": 10000,
    "capacity": 10000
}
```

```sh
response:
{
    "id": 9,
    "number": 10000,
    "capacity": 10000,
    "availableSpace": 10000,
    "created_at": "2021-03-01T08:09:02.545Z",
    "updated_at": "2021-03-01T08:09:02.545Z",
    "stocks": []
}
```

3. Stock Warehouse http://localhost:1337/stocks [POST]
```sh
payload:
{
    "qty": 5000,
    "warehouse": "10000",
    "SKU": 6299
}
```

```sh
response:
{
    "id": 63,
    "product": {
        "id": 5,
        "name": "OX Standing Fan",
        "SKU": "6299",
        "stock": null,
        "created_at": "2021-02-28T14:34:47.411Z",
        "updated_at": "2021-02-28T14:34:48.311Z"
    },
    "warehouse": {
        "id": 9,
        "number": 10000,
        "capacity": 10000,
        "availableSpace": 5000,
        "created_at": "2021-03-01T08:09:02.545Z",
        "updated_at": "2021-03-01T08:09:11.707Z"
    },
    "qty": 5000,
    "created_at": "2021-03-01T08:09:12.241Z",
    "updated_at": "2021-03-01T08:09:12.307Z"
}
```
4. List all products http://localhost:1337/products [GET]
```sh
response:
[
    {
        "id": 1,
        "name": "Lenovo ideapad 320",
        "SKU": "100",
        "stock": null,
        "created_at": "2021-02-28T11:38:09.117Z",
        "updated_at": "2021-02-28T12:09:02.306Z"
    },
    {
        "id": 2,
        "name": "Samsung Note 8",
        "SKU": "120",
        "stock": null,
        "created_at": "2021-02-28T11:40:49.990Z",
        "updated_at": "2021-02-28T11:40:50.013Z"
    },
    {
        "id": 3,
        "name": "Apple iPad",
        "SKU": "34",
        "stock": null,
        "created_at": "2021-02-28T12:02:24.308Z",
        "updated_at": "2021-02-28T12:08:44.406Z"
    },
    {
        "id": 4,
        "name": "LG TV",
        "SKU": "300",
        "stock": null,
        "created_at": "2021-02-28T12:25:06.007Z",
        "updated_at": "2021-02-28T12:25:06.007Z"
    },
    {
        "id": 5,
        "name": "OX Standing Fan",
        "SKU": "6299",
        "stock": null,
        "created_at": "2021-02-28T14:34:47.411Z",
        "updated_at": "2021-02-28T14:34:48.311Z"
    },
    {
        "id": 6,
        "name": "MacBook Pro",
        "SKU": "700",
        "stock": 59,
        "created_at": "2021-02-28T18:14:29.087Z",
        "updated_at": "2021-02-28T19:24:37.836Z"
    },
    {
        "id": 7,
        "name": "Tecno Phone",
        "SKU": "5000",
        "stock": null,
        "created_at": "2021-03-01T07:23:32.295Z",
        "updated_at": "2021-03-01T07:23:32.295Z"
    },
    {
        "id": 9,
        "name": "Airpod Pro",
        "SKU": "7700",
        "stock": null,
        "created_at": "2021-03-01T08:08:16.422Z",
        "updated_at": "2021-03-01T08:08:16.422Z"
    },
    {
        "id": 10,
        "name": "Apple Mac Book Pro",
        "SKU": "6000",
        "stock": null,
        "created_at": "2021-03-01T08:08:56.048Z",
        "updated_at": "2021-03-01T08:08:56.048Z"
    }
]
```

5. List all warehouses http://localhost:1337/warehouses [GET]
```sh
response:
[
    {
        "id": 1,
        "number": 100,
        "capacity": 10000,
        "availableSpace": 10000,
        "created_at": "2021-02-28T11:41:04.373Z",
        "updated_at": "2021-02-28T19:20:56.048Z",
        "stocks": [
            {
                "id": 39,
                "product": 1,
                "warehouse": 1,
                "qty": 300,
                "created_at": "2021-02-28T14:37:45.229Z",
                "updated_at": "2021-02-28T19:20:55.997Z"
            }
        ]
    },
    {
        "id": 2,
        "number": 200,
        "capacity": 4000,
        "availableSpace": 4000,
        "created_at": "2021-02-28T11:41:18.630Z",
        "updated_at": "2021-02-28T19:21:12.902Z",
        "stocks": []
    },
    {
        "id": 5,
        "number": 300,
        "capacity": null,
        "availableSpace": null,
        "created_at": "2021-02-28T13:40:28.065Z",
        "updated_at": "2021-02-28T13:40:28.124Z",
        "stocks": [
            {
                "id": 52,
                "product": 2,
                "warehouse": 5,
                "qty": 122,
                "created_at": "2021-02-28T18:50:42.104Z",
                "updated_at": "2021-02-28T18:50:42.139Z"
            }
        ]
    },
    {
        "id": 8,
        "number": 6000,
        "capacity": 50000,
        "availableSpace": 50000,
        "created_at": "2021-03-01T08:08:42.861Z",
        "updated_at": "2021-03-01T08:08:42.861Z",
        "stocks": []
    },
    {
        "id": 9,
        "number": 10000,
        "capacity": 10000,
        "availableSpace": 5000,
        "created_at": "2021-03-01T08:09:02.545Z",
        "updated_at": "2021-03-01T08:09:11.707Z",
        "stocks": [
            {
                "id": 63,
                "product": 5,
                "warehouse": 9,
                "qty": 5000,
                "created_at": "2021-03-01T08:09:12.241Z",
                "updated_at": "2021-03-01T08:09:12.307Z"
            }
        ]
    }
]
```
6. List a particular warehouse http://localhost:1337/warehouses/100 [GET]
```sh
response: 
{
    "id": 1,
    "number": 100,
    "capacity": 10000,
    "availableSpace": 10000,
    "created_at": "2021-02-28T11:41:04.373Z",
    "updated_at": "2021-02-28T19:20:56.048Z",
    "stocks": [
        {
            "id": 39,
            "product": 1,
            "warehouse": 1,
            "qty": 300,
            "created_at": "2021-02-28T14:37:45.229Z",
            "updated_at": "2021-02-28T19:20:55.997Z"
        }
    ]
}
```
