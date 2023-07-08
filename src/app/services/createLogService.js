const createNewLog = async (db, data) => {
    const { action = '', headers = '', ip = ''} = data;
    await db.logging.create({
        action,
        header: headers,
        ip
    });
}

module.exports = {
    createNewLog
};
