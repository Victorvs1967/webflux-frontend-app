export class User {

  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string = "member";

  constructor(password: string, firstName: string, lastName: string, phone: string, email: string) {
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

}