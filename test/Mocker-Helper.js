export const requestObj =  () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    return req;
}

export const responseObj = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res); 
    res.send = jest.fn().mockReturnValue(res);
    return res; 
}