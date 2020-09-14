const getById = (req, res) => {
  // res.statusCode = 200
  // res.setHeader('content-type','application/json')
  // res.end(req.query.id)
  res.json({yourId: req.query.id})
}

export default getById