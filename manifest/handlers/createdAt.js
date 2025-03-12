module.exports = async (req, res) => {
    const date = req.body['createdAt'] ? req.body['createdAt'].split('T')[0] : new Date().toISOString().split('T')[0];
    req.body['createdAt'] = date;
    console.log('createdAt', JSON.stringify(req.body));
}