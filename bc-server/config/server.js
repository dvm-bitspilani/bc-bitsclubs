module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIyMjAxOTE3LCJleHAiOjE2MjQ3OTM5MTd9.vp8o61P3eUJF3Moc53R-WifBo0LzMuKZgvfXa7XqJao'),
    },
  },
});


