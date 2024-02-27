
# Inventory

inventory that allows users to buy product provided in the inventory with different payment methods with their accounts or help from the admin.


## Schema
Database Schema

![plot](https://github.com/kazzamine/inventory_pos/blob/dev/Database%20Schema/inventory.pdf)


## Used By

This project is used by the following type of users:

-  Normal user
-  Admin


## Usage
* User:
    - consult and update his informations
    - Make an order
    - consult his orders
* Admin:
    - create users accounts
    - make orders (for users)
    - consult all orders
    - create update or remove :
        - Categories
        - products 
        - payment methods
        - models (navigation)



## Features

- Navigation menu render from database
- if password forgotten ,you can ask for a reset (mail with the reset link is sent)
- On making order success an invoice pdf displayed to download , at the same time it sent to users via mail
- users notified on their mails on account creation
- users can report problems or contact admins in a simple form (sending mails)


## Tech Stack

**Client:** HTML, CSS, SCSS,Bootstrap,Javascript,Jquery,AJAX,NPM
**NPM Packages**
| package  | Uses |
| ------------- | ------------- |
|  Notifyjs  |  display alerts  |
| Chartjs  | display chart analytics  |
| node-sass  | to bind js with sass files  |

**Deployement Server:** nginx/1.24.0 (Ubuntu)


**Server:** Symfony v7.1 , Composer v2.6.6, MYSQL 8.0.36-0 ubuntu

**Dependencies**
| Dependency  | Uses |
| ------------- | ------------- |
|  DomPDF  |  Generating pdf  |
| google-mailer  | sending mails with gmail smtp  |
| php-flasher  | display alerts from controllers  |
     | Other known Dependencies like doctrine,security..|

**Login Exceptions:** are handled using custom classes like accessDeniedHandler,number of login attempts


## Environment Variables

To run this project, you will need to modify the following environment variables to your .env file

`DATABASE_URL` : with your database

`MAILER_DSN` : with your gmail smtp account


## Folders 
*explaining uncommon files and folders in symfony projects *
- src :
    - twig : contain a custom extension that renders function that returns models array of object
    - services : common and most used functions 
    - security : custom access handlers and authentication classes
    - form : forms created
- assets :
    - js : javascript files containing function that gets exported for uses in diferenet files
    - styles : custom scss , css files
- webpackConfig.js : configuration for webpack 
## Running Tests

To run tests, run the following command

```bash
  php bin/phpunit
```
cause of empty database Test some tests may fail -- should be filed 1st --


## Branchs

- dev : contains latest updates
- main : contains final functional product

