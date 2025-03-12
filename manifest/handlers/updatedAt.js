module.exports = async (req, res) => {
    const date = req.body['updatedAt'] ? req.body['updatedAt'].split('T')[0] : new Date().toISOString().split('T')[0];
    req.body['updatedAt'] = date;
    console.log('updatedAt', JSON.stringify(req.body));
}