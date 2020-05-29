const Url = require('../models/urls');

const url = new Url();

const list = async (req, res) => {
  try {
    const urls = await url.listUrl();   

    res.render('urls', {
      urls,
    });  
  } catch (e) {
    console.log(e);
    
    return res.status(500).send({
      message: e,
    });
  }
};

const add = async (req, res) => {
  try {
    
    await url.addUrl(req.body);

    return res.json({
      message: "new url",
    });
  } catch (e) {
    console.log(e);
    
    return res.status(500).json({
      message: e,
    });
  }
};

const update = async (req, res) => {
  try {
    await url.updateUrl(req.body);

    return res.json({
      message: "update Url",
    });
  } catch (e) {
    return res.status(500).json({
      message: e,
    });
  }
};

const delet = async (req, res) => {
  try {
    await url.deleteUrl(req.body.id);

    return res.json({
      message: "delete Url",
    });
  } catch (e) {
    return res.status(500).json({
      message: e,
    });
  }
};


module.exports = {
  list,
  add,
  update,
  delet
};