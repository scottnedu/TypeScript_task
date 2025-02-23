# TypeScript_task

This project demonstrates how to filter a list of User and Admin objects using TypeScript. It includes a filterPersons function that filters based on personType and criteria, ensuring type safety and flexibility.


# The function filters a list of Person objects based on:

personType: Either 'user' or 'admin'.

criteria: A partial object of User or Admin properties (excluding type).

# I used function overloads to ensure the function returns the correct type (User[] or Admin[]) based on personType.

# I added a type guard to ensure the criteria argument is a valid object.

# Used Partial<Omit<User, 'type'>> and Partial<Omit<Admin, 'type'>> to exclude the type field from the criteria object.

