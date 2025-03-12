# node-manifest-postgres

```
curl -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmllbEBsb3VsdGltb2VubGF3ZWIuY29tIiwiZW50aXR5U2x1ZyI6ImFkbWlucyIsImlhdCI6MTc0MTgwMTYyOX0.o5FaH1AHWJvpzITaPXKHkB3fc9UrkoNvQ2PwjnUvlOE'  -d '{ "name": "curl", "amount": "123.00" }' http://localhost:1111/api/collections/plans


curl -X 'POST' \
  'http://localhost:1111/api/auth/accounts/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "info@loultimoenlaweb.com",
  "password": "14093487"
}'


curl -X 'POST' \
  'http://localhost:1111/api/auth/admins/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "daniel@loultimoenlaweb.com",
  "password": "14093487"
}'
```

[Documentation](https://manifest.build/docs/authentication)