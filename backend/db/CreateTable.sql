CREATE TABLE CarListing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitorID TEXT NOT NULL,
    Car_Title TEXT NOT NULL,
    Make TEXT NOT NULL,
    Model TEXT NOT NULL,
    Year INTEGER NOT NULL,
    Price REAL NOT NULL,
    Mileage INTEGER NOT NULL,
    Condition TEXT NOT NULL,
    Photos TEXT,
    Contact_Name TEXT NOT NULL,
    Phone_Number TEXT NOT NULL,
    Email TEXT NOT NULL
);

CREATE TABLE ElectronicsListing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitorID TEXT NOT NULL,
    Electronics_Title TEXT NOT NULL,
    Type TEXT NOT NULL,
    Brand TEXT NOT NULL,
    Model TEXT NOT NULL,
    Year INTEGER NOT NULL,
    Price REAL NOT NULL,
    Condition TEXT NOT NULL,
    Photos TEXT,
    Contact_Name TEXT NOT NULL,
    Phone_Number TEXT NOT NULL,
    Email TEXT NOT NULL
);

CREATE TABLE PropertyListing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitorID TEXT NOT NULL,
    Property_Title TEXT NOT NULL,
    Property_Type TEXT NOT NULL,
    Location TEXT NOT NULL,
    Price REAL NOT NULL,
    Number_of_Bedrooms INTEGER NOT NULL,
    Number_of_Bathrooms INTEGER NOT NULL,
    Amenities TEXT,
    Photos TEXT,
    Contact_Name TEXT NOT NULL,
    Phone_Number TEXT NOT NULL,
    Email TEXT NOT NULL
);
