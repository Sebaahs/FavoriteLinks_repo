const { ETIMEDOUT } = require('constants');
const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add', (req, res) =>{ /* define la ruta de la vista de add links */
    res.render('links/add.hbs');
});

router.post('/add', async(req, res) => {

    const {title, url, description} = req.body;

    const objLink = {
        title,
        url,
        description
    };

    await pool.query(`INSERT INTO link (title,url,description) VALUES ('${objLink.title}','${objLink.url}','${objLink.description}');`);
    req.flash('success', 'Link saved');
    res.redirect('/links');
});

router.get('/', async(req, res) => {
    const links = await pool.query('SELECT * FROM link;');
    res.render('links/list.hbs', {links});
});

router.get('/delete/:id', async(req, res) =>{   
    const {id} = req.params;
    await pool.query(`DELETE FROM link WHERE idLink = ${id};`);
    req.flash('success', 'Link deleted');
    res.redirect('/links');
});

router.get('/edit/:id', async(req, res) =>{
    const { id } = req.params;
    const link = await pool.query(`SELECT * FROM link WHERE idLink = ${id};`);
    res.render('links/edit.hbs', {link: link[0]});
});

router.post('/edit/:id', async(req, res) =>{
    const { id } = req.params;
    const {title,url,description} = req.body;

    objLink = {
        title,
        url,
        description
    };

    await pool.query('UPDATE link set ? WHERE idLink = ?', [objLink, id]);
    req.flash('success', 'Link edited');
    res.redirect('/links');
});

module.exports = router;