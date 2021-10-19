# Todo Auth Homework
The last two weeks, we've been diving deep into making an auth-backend.
Over the weekend, remake the whole auth backend for a CRU(Create, Read, Update)Todo App.

- [x] Submit Github repo link in

## Requirement:
- [x] Commit commit commit!
- [ ] User can sign-up, login, update with JWT
  - [ ] Create User
    - [x] login matches model
    - [x] password is salt
    - [ ] middleware for validation
    - [x] saves to db
  - [ ] Delete User
- [ ] User will be able to make a todo list once signed it. Each todo is connected to the user and only that user will be able to see those todos.
- [ ] User collection will have date, firstName, lastName, username, email, password and todos.
- [ ] Todo collection will have date, todo, done, and user.
- [ ] Create Middlewares, include validator
- [ ] Have a router, model and controller for user and todo
- [ ] Use MongoDB, mongoose, bcryptjs, JWT
- [ ] Include .env

* Remember they are going to be related to each other!

## EXTRA CREDIT:
- [ ] Include delete, user can delete the todo which will also remove from user's array.