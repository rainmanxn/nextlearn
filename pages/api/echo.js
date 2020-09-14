const echo = (req, res) => {
  res.statusCode = 200
  res.setHeader('content-type','application/json')
  res.end(JSON.stringify({
    message: req.query.message ?? 'base message'
  }))
}

export default echo