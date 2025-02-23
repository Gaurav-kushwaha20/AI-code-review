const aiServices = require("../../src/services/ai.service")

module.exports.getReview = async (req, res)=>{
    
    const code = req.body.code;
    
    if(!code){
        return res.status(404).send('code is required!');
    }
    
    const response = await aiServices(code)
    res.status(200).send({data: response});
    
    
}