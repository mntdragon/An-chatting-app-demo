module.exports = {
  routing: function(app) {
    app.get('/', function (req, res) {
      res.sendFile('public/index.html')
    })

    app.get('/test', function (req, res) {
      res.send('i am tester')
    })
  },
  
  a: [1,2,3],
  username: {
    nhan:{
      name: "Nhan"
    }
  }
}
