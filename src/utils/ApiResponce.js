class ApiResponse {
  constructor(statusCode, data, mesage = "success") {
   this.statusCode = statusCode;
   this.data = data;
   this.message = mesage;
   this.success = true; //status code should be less than 400 for success
}
}