function GenericCtrl(req,res,cb){
    try{
        cb();
    }
    catch (e) {
        res.status(404).text(e.error);
    }
}
module.exports = GenericCtrl;