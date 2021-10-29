module.exports = {
    healthCheck: async( req, res) => {
        return res.status(200).json({
            status: "success",
            message: "OK!!",
            data: {}
        })
    }
}