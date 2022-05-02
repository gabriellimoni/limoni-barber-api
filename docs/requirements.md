# Limoni Barber Requirements

## 1.0 Migrations and Seeds

- All tables
- Full admin user

### Basic roles and permissions

Full admin:

- Full access on BarberShopPoll operations;
- Full access on BarberShopUser operations;
- Full access on BarberShop operations;
- Full access on Barber operations;
- Full access on Attendance operations;
- Full access on Client operations.

Barber Shop Poll Manager:

- Full own BarberShopPoll operations;
- Full own BarberShopUser operations;
- Full own BarberShop operations;
- Full own Barber operations;
- Full own Attendance operations;
- Full own Client operations.

Barber Shop Manager:

- Full own BarberShopUser operations;
- Full own BarberShop operations;
- Full own Barber operations;
- Full own Attendance operations;
- Full own Client operations.

Barber Shop Attendant:

- Readonly own BarberShopUser;
- Readonly own BarberShop;
- Readonly own Barber operations;
- Full own Attendance operations;
- Full own Client operations.

## 2.0 Auth

- Login
- Refresh Token
- Authentication Middleware
- Change password

## 3.0 Registration

- CRUD BarberShopUser

## 4.0 Barber Shop Management

- CRUD BarberShopPoll
- CRUD BarberShop

## 5.0 Barber management

- CRUD Barber
- CRUD BarberJobs

## 6.0 Client management

- CRUD Client

## 7.0 Attendance management

- CRUD Attendance
- Finish attendance
- Exclude attendance

## 8.0 Roles and permissions management

- CRUD Roles and permissions
