exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.routing = function(req, res){
  res.render('routing', { title: 'Routing Example' })
};

exports.post = function(req, res){
  var data = req.body.data;
  // Get the "data" parameter from the she request and spit
  //  it out to the console;
  console.log(data);

  res.render('post', {
    title: 'Posted Stuff',
    data: req.body.data
  });
}