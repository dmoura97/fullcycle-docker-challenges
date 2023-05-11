FROM golang:1.16.4-alpine3.13 AS builder
WORKDIR /app
COPY . .
RUN go build -o /app/main
FROM scratch
COPY --from=builder /app/main /main
CMD ["/main"]
