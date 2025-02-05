## Sample CURL Inserting Data
#
### API insert for car
```
curl -X POST http://localhost:3000/api/insert-data \
-H "Content-Type: application/json" \
-d '{
  "type": "car",
  "data": {
    "visitorID": "V123",
    "Car_Title": "Toyota Corolla 2018",
    "Make": "Toyota",
    "Model": "Corolla",
    "Year": 2018,
    "Price": 800000,
    "Mileage": 50000,
    "Condition": "Good",
    "Photos": "corolla.jpg",
    "Contact_Name": "Ravi Kumar",
    "Phone_Number": "9876543210",
    "Email": "ravi@example.com"
  }
}'

```

### API insert for ELectronics
```
curl -X POST http://localhost:3000/api/insert-data \
-H "Content-Type: application/json" \
-d '{
  "type": "electronics",
  "data": {
    "visitorID": "V125",
    "Electronics_Title": "Apple iPhone 12",
    "Type": "Mobile",
    "Brand": "Apple",
    "Model": "iPhone 12",
    "Year": 2020,
    "Price": 60000,
    "Condition": "Excellent",
    "Photos": "iphone12.jpg",
    "Contact_Name": "Sunita Verma",
    "Phone_Number": "9876543212",
    "Email": "sunita@example.com"
  }
}'
```

### API insert for PropertyListing

```
curl -X POST http://localhost:3000/api/insert-data \
-H "Content-Type: application/json" \
-d '{
  "type": "property",
  "data": {
    "visitorID": "V127",
    "Property_Title": "2BHK Apartment in Mumbai",
    "Property_Type": "Apartment",
    "Location": "Mumbai",
    "Price": 7500000,
    "Number_of_Bedrooms": 2,
    "Number_of_Bathrooms": 2,
    "Amenities": "Gym, Pool",
    "Photos": "apartment1.jpg",
    "Contact_Name": "Kiran Mehta",
    "Phone_Number": "9876543214",
    "Email": "kiran@example.com"
  }
}'
```

### View Car
```
curl -X GET "http://localhost:3000/api/view-data?type=car"
```
### View Electronics
```
curl -X GET "http://localhost:3000/api/view-data?type=electronics"
```
### View Property Listing
```
curl -X GET "http://localhost:3000/api/view-data?type=property"
```